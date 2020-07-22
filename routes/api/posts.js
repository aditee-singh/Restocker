const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary");
require("../../handlers/cloudinary");
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Post = require("../../model/Post");
const User = require("../../model/User");
const Category = require("../../model/Category");
const Trade = require("../../model/Trade");
const upload = require("../../handlers/multer");
//@route api/posts
//@desc Get all posts
//@access public
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("category", ["category"])
      .populate("trade", ["trade"])
      .populate("user", ["name", "email"]);
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Server Error");
  }
});

//@route api/posts/:post_id
//@desc get POST by ID
//@access public
router.get("/:post_id", async (req, res) => {
  try {
    const post = await Post.findOne({
      _id: req.params.post_id,
    })
      .populate("user", ["name", "email"])
      .populate("category", ["category"])
      .populate("trade", ["trade"]);
    return res.json(post);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        msg: "Post not found",
      });
    }
    res.status(500).send("Server Error");
  }
});

//@route GET api/posts/:category
//@desc Get post by category
//@access public
router.get("/category/:slug", async (req, res) => {
  try {
    const cat = await Category.findOne({ slug: req.params.slug });
    console.log(cat);
    const posts = await Post.find({ category: cat._id })
      .populate("user", ["name"])
      .populate("category", ["category"])
      .populate("trade", ["trade"]);
    return res.status(200).json(posts);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        msg: "Category not found",
      });
    }
    res.status(500).send("Server Error");
  }
});

//@route api/posts
//@desc POST a post
//@access PRIVATE
//5f00df1203411b3818fe1997
router.post(
  "/",
  [
    auth,
    upload.single("image"),
    [
      check("title", "Title is required").not().isEmpty(),
      check("description", "Description is required").not().isEmpty(),
      check("category", "Please select one category").not().isEmpty(),
      check("trade", "Please select the type of trade").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      console.log(req.file);
      const { title, description, category, trade } = req.body;
      const trad = await Trade.findOne({ trade });
      const cat = await Category.findOne({ category });
      let post;
      if (req.file) {
        const result = await cloudinary.v2.uploader.upload(req.file.path, {
          upload_preset: "restocker",
        });
        post = new Post({
          title,
          description,
          user: req.user.id,
          category: cat.id,
          trade: trad.id,
          imageUrl: result.secure_url,
          imagePublicId: result.public_id,
        });
        console.log(result);
      } else {
        post = new Post({
          title,
          description,
          user: req.user.id,
          category: cat.id,
          trade: trad.id,
        });
      }
      post = await post.save();
      return res.json(post);
    } catch (error) {
      console.log(error.message);
      return res.status(500).send("Server Error");
    }
  }
);

//@route api/posts/comment/:post_id
//@desc PUT request to comment on a post
//@access PRIVATE
router.put(
  "/comment/:post_id",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { text } = req.body;
    try {
      const user = await User.findById(req.user.id).select("-password");
      const post = await Post.findById(req.params.post_id);
      const newComment = {
        text,
        user: user.id,
        name: user.name,
      };
      post.comments.unshift(newComment);
      await post.save();
      return res.json(post.comments);
    } catch (error) {
      console.log(error.message);
      return res.status(500).send("Server Error");
    }
  }
);

//@route DELETE api/posts/:post_id
//@desc DELETE a post
//@access Private
router.delete("/:post_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    if (post.user.toString() !== req.user.id.toString()) {
      return res.status(404).json({ msg: "You can only delete your posts" });
    }
    if (post.imageUrl) {
      await cloudinary.v2.uploader.destroy(post.imagePublicId);
    }
    await post.remove();
    res.json({ msg: "Post removed" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Server Error");
  }
});

//@route api/posts/like/:post_id/
//@desc PUT like a post
//@access PRIVATE
router.put("/like/:post_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);
    if (!post) {
      return res.status(404).send({ msg: "Post not found" });
    }
    //if post has already been liked
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({
        msg: "Post already liked",
      });
    }
    post.likes.unshift({ user: req.user.id });
    await post.save();
    return res.json(post.likes);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Server Error");
  }
});

//@route DELETE api/posts/comment/:post_id/:comment_id
//@desc delete a comment
//@access PRIVATE
router.delete("/comment/:post_id/:comment_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);
    console.log(post);
    const comment = post.comments.find(
      (comment) => comment.id.toString() === req.params.comment_id
    );
    if (!comment) {
      return res.status(404).json({
        msg: "Comment not found",
      });
    }
    console.log(req.user.id, comment.user, post.user);
    console.log(comment);
    if (comment.user.toString() !== req.user.id.toString() && req.user.id !== post.user.toString()) {
      return res.status(400).json({
        msg: "User not authorized",
      });
    }

    const removeIndex = post.comments
      .map((comment) => comment.id.toString())
      .indexOf(req.params.comment_id);
    post.comments.splice(removeIndex, 1);
    await post.save();
    res.json(post.comments);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({
        msg: "Comment not found",
      });
    }
    res.status(500).send("Server Error");
  }
});

//@route PUT api/unlike/:post_id/
//@desc PUT request to unlike a post
//@access PRIVATE
router.put("/unlike/:post_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "You haven't liked this post" });
    }
    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);
    post.likes.splice(removeIndex, 1);
    await post.save();
    return res.json(post.likes);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
