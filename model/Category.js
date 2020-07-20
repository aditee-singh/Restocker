const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");
const CategorySchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
});
CategorySchema.pre("validate", function (next) {
  if (this.category) {
    this.slug = slugify(this.category, { lowecase: true });
  }
  next();
});
module.exports = Category = mongoose.model("category", CategorySchema);
