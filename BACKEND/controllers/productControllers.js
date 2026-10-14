const Product = require("../models/productModels");
const cloudinary = require("../config/cloudinary");
const uploadToCloudinary = require("../utils/uploadToCloudinary");

const createProdct = async (req, res) => {
  try {
    const { name, brand, price, category, description } = req.body;

    if (!name || !brand || !price || !category || !description) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    // upload image
    let image = {};

    if(req.file) {
      const result = await uploadToCloudinary(req.file.buffer);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      }
    }

    const product = await Product.create({
      name,
      brand,
      price,
      category,
      description,
      image,
    });

    res.status(201).json({
      message: "Add new product successfully!",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllProdct = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      message: "Find all product",
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// const uploadImage = async (req, res) => {
//   try {
//     const { image } = req.file;

//     if(!image) {
//       return res.status(400).json({ message: "কোনো ছবি দেওয়া হয়নি" })
//     }

//     const result = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { folder: "my_shop" },
//         (error, result) => (error ? reject(error) : resolve(result))
//       )
//       stream.end(req.file.buffer)
//     })

//     res.status(201).json({
//       url: result.secure_url,
//       public_id: result.public_id
//     })
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// }

module.exports = {
  createProdct,
  getAllProdct,
  // uploadImage,
};
