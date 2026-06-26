import db from '../config/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export const getProductsModel = async () => {
    try {
        const snapshot = await getDocs(productsCollection);
        const products = [];
        snapshot.forEach(doc => {
            products.push({ id: doc.id, ...doc.data() });
        });
        return products;
    } catch (e) {
        console.error('Error al obtener los productos: ', e);
        return [];
    }
};