




const demoProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "Electronics",
    brand: "Apple",
    price: 999,
    oldPrice: 1099,
    discount: 9,
    rating: 4.8,
    stock: 15,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/iphone-15-pro/1.webp",
    description:
      "Premium smartphone with a powerful processor, advanced camera system, and stunning display.",
  },

  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    category: "Electronics",
    brand: "Samsung",
    price: 899,
    oldPrice: 999,
    discount: 10,
    rating: 4.7,
    stock: 12,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s24-ultra/1.webp",
    description:
      "Flagship smartphone with a premium display, powerful performance, and professional camera system.",
  },

  {
    id: 3,
    name: "MacBook Pro 14",
    category: "Electronics",
    brand: "Apple",
    price: 1799,
    oldPrice: 1999,
    discount: 10,
    rating: 4.9,
    stock: 8,
    image:
      "https://cdn.dummyjson.com/product-images/laptops/macbook-pro-14-inch-m3/1.webp",
    description:
      "Powerful professional laptop designed for development, creative work, and everyday productivity.",
  },

  {
    id: 4,
    name: "Gaming Laptop",
    category: "Electronics",
    brand: "ASUS",
    price: 1299,
    oldPrice: 1450,
    discount: 10,
    rating: 4.6,
    stock: 10,
    image:
      "https://cdn.dummyjson.com/product-images/laptops/asus-rog-strix-g15/1.webp",
    description:
      "High-performance gaming laptop with a fast display and powerful hardware.",
  },

  {
    id: 5,
    name: "Wireless Headphones",
    category: "Electronics",
    brand: "Sony",
    price: 149,
    oldPrice: 199,
    discount: 25,
    rating: 4.5,
    stock: 25,
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/1.webp",
    description:
      "Comfortable wireless headphones with clear sound and long battery life.",
  },

  {
    id: 6,
    name: "Smart Watch Series 9",
    category: "Electronics",
    brand: "Apple",
    price: 299,
    oldPrice: 349,
    discount: 14,
    rating: 4.7,
    stock: 18,
    image:
      "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/1.webp",
    description:
      "Modern smartwatch with health tracking, notifications, and fitness features.",
  },

  {
    id: 7,
    name: "Classic Cotton T-Shirt",
    category: "Fashion",
    brand: "UrbanWear",
    price: 25,
    oldPrice: 35,
    discount: 29,
    rating: 4.4,
    stock: 40,
    image:
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
    description:
      "Comfortable everyday cotton shirt with a clean and modern design.",
  },

  {
    id: 8,
    name: "Casual Denim Jacket",
    category: "Fashion",
    brand: "DenimCo",
    price: 69,
    oldPrice: 89,
    discount: 22,
    rating: 4.6,
    stock: 20,
    image:
      "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
    description:
      "Classic denim jacket suitable for casual everyday outfits.",
  },

  {
    id: 9,
    name: "Men's Casual Shoes",
    category: "Fashion",
    brand: "Nike",
    price: 89,
    oldPrice: 119,
    discount: 25,
    rating: 4.7,
    stock: 16,
    image:
      "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp",
    description:
      "Stylish casual shoes designed for comfort and everyday use.",
  },

  {
    id: 10,
    name: "Classic Leather Wallet",
    category: "Accessories",
    brand: "LeatherCraft",
    price: 35,
    oldPrice: 49,
    discount: 29,
    rating: 4.5,
    stock: 30,
    image:
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp",
    description:
      "Minimal leather accessory with a premium and timeless appearance.",
  },

  {
    id: 11,
    name: "Premium Sunglasses",
    category: "Accessories",
    brand: "RayStyle",
    price: 59,
    oldPrice: 79,
    discount: 25,
    rating: 4.6,
    stock: 22,
    image:
      "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/1.webp",
    description:
      "Modern sunglasses with a stylish frame suitable for everyday wear.",
  },

  {
    id: 12,
    name: "Classic Wrist Watch",
    category: "Accessories",
    brand: "TimeCraft",
    price: 129,
    oldPrice: 159,
    discount: 19,
    rating: 4.8,
    stock: 14,
    image:
      "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp",
    description:
      "Elegant wrist watch with a classic design and premium appearance.",
  },

  {
    id: 13,
    name: "Modern Backpack",
    category: "Accessories",
    brand: "TravelPro",
    price: 55,
    oldPrice: 75,
    discount: 27,
    rating: 4.5,
    stock: 27,
    image:
      "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/1.webp",
    description:
      "Spacious everyday backpack designed for work, study, and travel.",
  },

  {
    id: 14,
    name: "Modern Wooden Chair",
    category: "Home & Lifestyle",
    brand: "HomeCraft",
    price: 120,
    oldPrice: 150,
    discount: 20,
    rating: 4.4,
    stock: 9,
    image:
      "https://cdn.dummyjson.com/product-images/furniture/wooden-desk/1.webp",
    description:
      "Minimal wooden furniture piece designed for modern interiors.",
  },

  {
    id: 15,
    name: "Modern Sofa",
    category: "Home & Lifestyle",
    brand: "ComfortHome",
    price: 499,
    oldPrice: 599,
    discount: 17,
    rating: 4.8,
    stock: 6,
    image:
      "https://cdn.dummyjson.com/product-images/furniture/3-seat-sofa/1.webp",
    description:
      "Comfortable modern sofa that fits beautifully into contemporary living spaces.",
  },

  {
    id: 16,
    name: "Wooden Coffee Table",
    category: "Home & Lifestyle",
    brand: "HomeCraft",
    price: 159,
    oldPrice: 199,
    discount: 20,
    rating: 4.5,
    stock: 11,
    image:
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
    description:
      "Simple wooden furniture with a clean design for modern homes.",
  },

  {
    id: 17,
    name: "Premium Perfume",
    category: "Beauty",
    brand: "FragranceCo",
    price: 79,
    oldPrice: 99,
    discount: 20,
    rating: 4.7,
    stock: 24,
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-euphoria/1.webp",
    description:
      "Elegant fragrance with a sophisticated scent suitable for everyday occasions.",
  },

  {
    id: 18,
    name: "Luxury Beauty Set",
    category: "Beauty",
    brand: "Glamour",
    price: 49,
    oldPrice: 69,
    discount: 29,
    rating: 4.6,
    stock: 19,
    image:
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
    description:
      "Complete beauty set with a stylish selection of essential cosmetics.",
  },

  {
    id: 19,
    name: "Wireless Gaming Controller",
    category: "Electronics",
    brand: "GameTech",
    price: 59,
    oldPrice: 79,
    discount: 25,
    rating: 4.7,
    stock: 21,
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-13-pro-max-case/1.webp",
    description:
      "Comfortable wireless controller designed for an enjoyable gaming experience.",
  },

  {
    id: 20,
    name: "Premium Tablet",
    category: "Electronics",
    brand: "Samsung",
    price: 449,
    oldPrice: 499,
    discount: 10,
    rating: 4.8,
    stock: 13,
    image:
      "https://cdn.dummyjson.com/product-images/tablets/amazon-fire-hd-8-10th-gen/1.webp",
    description:
      "Portable tablet with a vibrant display, smooth performance, and modern design.",
  },
];

export default demoProducts;
