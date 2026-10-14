const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(), // ফাইল মেমোরিতে থাকবে, ডিস্কে সেভ হবে না
  limits: { fileSize: 5 * 1024 * 1024 }, // সর্বোচ্চ ৫MB
});

module.exports = upload;
