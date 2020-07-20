const cloudinary = require("cloudinary");
const config = require("config");
cloudinary.config({
  cloud_name: config.get("CLOUD_NAME"),
  api_key: config.get("API_ID"),
  api_secret: config.get("API_SECRET"),
});
