const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required!"],
    },
    brand: {
      type: String,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    description: {
      type: String,
    },
    image: {
      url: {type: String},
      public_id: {type: String}
    }
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
