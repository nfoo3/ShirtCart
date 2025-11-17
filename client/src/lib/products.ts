import { Product } from "@/components/ProductCard";
import blackShirtImg from '@assets/generated_images/Black_t-shirt_product_photo_a64c865b.png';
import whiteShirtImg from '@assets/generated_images/White_t-shirt_product_photo_ff436831.png';
import navyShirtImg from '@assets/generated_images/Navy_blue_t-shirt_photo_ee73eba8.png';
import grayShirtImg from '@assets/generated_images/Gray_t-shirt_product_photo_f7a55b6d.png';
import redShirtImg from '@assets/generated_images/Red_t-shirt_product_photo_10c2c48a.png';
import greenShirtImg from '@assets/generated_images/Green_t-shirt_product_photo_bda7c61f.png';

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Black Tee",
    price: 29.99,
    description: "Premium cotton blend for ultimate comfort and durability",
    image: blackShirtImg,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "White", value: "#FFFFFF" },
      { name: "Navy", value: "#000080" }
    ]
  },
  {
    id: "2",
    name: "Essential White Tee",
    price: 27.99,
    description: "Breathable fabric perfect for everyday wear",
    image: whiteShirtImg,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Black", value: "#000000" },
      { name: "Gray", value: "#808080" }
    ]
  },
  {
    id: "3",
    name: "Navy Blue Classic",
    price: 31.99,
    description: "Timeless design with modern fit and premium quality",
    image: navyShirtImg,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Navy", value: "#000080" },
      { name: "Black", value: "#000000" },
      { name: "Blue", value: "#0000FF" }
    ]
  },
  {
    id: "4",
    name: "Heather Gray Tee",
    price: 28.99,
    description: "Soft heather fabric with a comfortable relaxed fit",
    image: grayShirtImg,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Gray", value: "#808080" },
      { name: "White", value: "#FFFFFF" },
      { name: "Black", value: "#000000" }
    ]
  },
  {
    id: "5",
    name: "Burgundy Red Tee",
    price: 32.99,
    description: "Bold color with excellent fade resistance",
    image: redShirtImg,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Red", value: "#DC143C" },
      { name: "Black", value: "#000000" },
      { name: "White", value: "#FFFFFF" }
    ]
  },
  {
    id: "6",
    name: "Forest Green Tee",
    price: 30.99,
    description: "Rich earth tone with sustainable cotton blend",
    image: greenShirtImg,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Green", value: "#228B22" },
      { name: "Black", value: "#000000" },
      { name: "Navy", value: "#000080" }
    ]
  }
];
