const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      required: [true, "Product name is required!"],
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
