import db from '../config/firebase.js';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';

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

export const getProductByIdModel = async (id) => {
    try {
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);

        if(!snapshot.exists()){
            return null;
        }

        return {
            id: snapshot.id,
            ...snapshot.data(),
        }
    } catch (e) {
        console.error('Error al obtener el producto: ', e);
        return [];
    }
};