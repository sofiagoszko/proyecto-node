import db from "../config/firebase.js"; 
import { collection, addDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");
const products = [
  {
    title: "Auriculares Bluetooth",
    description: "Auriculares inalámbricos con cancelación de ruido",
    price: 29999,
    stock: 15
  },
  {
    title: "Teclado Mecánico",
    description: "Teclado gaming con switches Cherry MX Red",
    price: 54999,
    stock: 8
  },
  {
    title: "Mouse Inalámbrico",
    description: "Mouse ergonómico con 6 botones programables",
    price: 18500,
    stock: 22
  },
  {
    title: "Monitor 24\"",
    description: "Monitor Full HD 144Hz ideal para gaming",
    price: 189999,
    stock: 5
  },
  {
    title: "Webcam HD",
    description: "Cámara 1080p con micrófono integrado para streaming",
    price: 35000,
    stock: 12
  }
];

const createProducts = () => {
  products.forEach(async (product) => {
    try {
      const docRef = await addDoc(productsCollection, product);
      console.log(`Producto creado con ID: ${docRef.id}`);
    } catch (e) {
      console.error("Error al agregar el producto: ", e);
    }
  })
};

createProducts();