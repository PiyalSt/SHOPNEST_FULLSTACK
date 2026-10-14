const cloudinary_js_config  = require("../config/cloudinary");

const uploadToCloudinary = (buffer, folder = "my_shop") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary_js_config.uploader.upload_stream(
      { folder },
      (error, result) => (error ? reject(error) : resolve(result)),
    );
    stream.end(buffer);
  });
};

module.exports = uploadToCloudinary;
