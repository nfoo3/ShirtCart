import { Product } from "@shared/schema";
import blackShirtImg from '@assets/generated_images/Black_t-shirt_product_photo_a64c865b.png';
import whiteShirtImg from '@assets/generated_images/White_t-shirt_product_photo_ff436831.png';
import navyShirtImg from '@assets/generated_images/Navy_blue_t-shirt_photo_ee73eba8.png';
import grayShirtImg from '@assets/generated_images/Gray_t-shirt_product_photo_f7a55b6d.png';
import redShirtImg from '@assets/generated_images/Red_t-shirt_product_photo_10c2c48a.png';
import greenShirtImg from '@assets/generated_images/Green_t-shirt_product_photo_bda7c61f.png';
import blueShirtImg from '@assets/generated_images/Blue_t-shirt_product_photo_932763cc.png';
import charcoalHeavyImg from '@assets/generated_images/charcoal_heavyweight_tee_product.png';
import oliveHeavyImg from '@assets/generated_images/olive_heavyweight_tee_product.png';
import brownHeavyImg from '@assets/generated_images/brown_heavyweight_tee_product.png';

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Black Tee",
    price: 29.99,
    description: "Premium cotton blend for ultimate comfort and durability",
    image: blackShirtImg,
    sizes: ["S", "M", "L", "XL"],
    gender: "mens",
    colors: [
      { name: "Black", value: "#000000", image: blackShirtImg },
      { name: "White", value: "#FFFFFF", image: whiteShirtImg },
      { name: "Navy", value: "#000080", image: navyShirtImg }
    ]
  },
  {
    id: "2",
    name: "Essential White Tee",
    price: 27.99,
    description: "Breathable fabric perfect for everyday wear",
    image: whiteShirtImg,
    sizes: ["S", "M", "L", "XL"],
    gender: "womens",
    colors: [
      { name: "White", value: "#FFFFFF", image: whiteShirtImg },
      { name: "Black", value: "#000000", image: blackShirtImg },
      { name: "Gray", value: "#808080", image: grayShirtImg }
    ]
  },
  {
    id: "3",
    name: "Navy Blue Classic",
    price: 31.99,
    description: "Timeless design with modern fit and premium quality",
    image: navyShirtImg,
    sizes: ["S", "M", "L", "XL"],
    gender: "mens",
    colors: [
      { name: "Navy", value: "#000080", image: navyShirtImg },
      { name: "Black", value: "#000000", image: blackShirtImg },
      { name: "Blue", value: "#0000FF", image: blueShirtImg }
    ]
  },
  {
    id: "4",
    name: "Heather Gray Tee",
    price: 28.99,
    description: "Soft heather fabric with a comfortable relaxed fit",
    image: grayShirtImg,
    sizes: ["S", "M", "L", "XL"],
    gender: "unisex",
    colors: [
      { name: "Gray", value: "#808080", image: grayShirtImg },
      { name: "White", value: "#FFFFFF", image: whiteShirtImg },
      { name: "Black", value: "#000000", image: blackShirtImg }
    ]
  },
  {
    id: "5",
    name: "Burgundy Red Tee",
    price: 32.99,
    description: "Bold color with excellent fade resistance",
    image: redShirtImg,
    sizes: ["S", "M", "L", "XL"],
    gender: "womens",
    colors: [
      { name: "Red", value: "#DC143C", image: redShirtImg },
      { name: "Black", value: "#000000", image: blackShirtImg },
      { name: "White", value: "#FFFFFF", image: whiteShirtImg }
    ]
  },
  {
    id: "6",
    name: "Forest Green Tee",
    price: 30.99,
    description: "Rich earth tone with sustainable cotton blend",
    image: greenShirtImg,
    sizes: ["S", "M", "L", "XL"],
    gender: "mens",
    colors: [
      { name: "Green", value: "#228B22", image: greenShirtImg },
      { name: "Black", value: "#000000", image: blackShirtImg },
      { name: "Navy", value: "#000080", image: navyShirtImg }
    ]
  },
  {
    id: "7",
    name: "Heavyweight Charcoal",
    price: 39.99,
    description: "Premium heavyweight cotton at 6.5oz - built to last with superior durability",
    image: charcoalHeavyImg,
    sizes: ["S", "M", "L", "XL", "XXL"],
    gender: "mens",
    colors: [
      { name: "Charcoal", value: "#36454F", image: charcoalHeavyImg },
      { name: "Black", value: "#000000", image: blackShirtImg },
      { name: "Olive", value: "#6B8E23", image: oliveHeavyImg }
    ]
  },
  {
    id: "8",
    name: "Heavyweight Olive",
    price: 39.99,
    description: "Rugged 6.5oz heavyweight fabric perfect for year-round wear",
    image: oliveHeavyImg,
    sizes: ["S", "M", "L", "XL", "XXL"],
    gender: "unisex",
    colors: [
      { name: "Olive", value: "#6B8E23", image: oliveHeavyImg },
      { name: "Charcoal", value: "#36454F", image: charcoalHeavyImg },
      { name: "Brown", value: "#654321", image: brownHeavyImg }
    ]
  },
  {
    id: "9",
    name: "Heavyweight Brown",
    price: 39.99,
    description: "Ultra-durable heavyweight construction with premium feel and longevity",
    image: brownHeavyImg,
    sizes: ["S", "M", "L", "XL", "XXL"],
    gender: "unisex",
    colors: [
      { name: "Brown", value: "#654321", image: brownHeavyImg },
      { name: "Charcoal", value: "#36454F", image: charcoalHeavyImg },
      { name: "Olive", value: "#6B8E23", image: oliveHeavyImg }
    ]
  }
];
