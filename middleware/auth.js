const jwt = require("jsonwebtoken");
const config = require("config");
const auth = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({
      msg: "Not logged in (no token)",
    });
  }
  try {
    const decoded = await jwt.verify(token, config.get("jwtToken"));
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: "Token Invalid",
    });
  }
};
module.exports = auth;
