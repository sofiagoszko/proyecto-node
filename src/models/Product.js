import db from '../config/firebase.js';
import { collection, getDocs, getDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';

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
    }
};

export const createProductModel = async (newProduct) => {
    try {
        const productRef = await addDoc(productsCollection, newProduct);

        return {
            id: productRef.id,
            ...newProduct,
        }
    } catch (e) {
        console.error('Error al crear producto: ', e);
    }
}

export const deleteProductModel = async (id) => {
    try {
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);

        if(!snapshot.exists()){
            return null;
        }

        const product =  {
            id: snapshot.id,
            ...snapshot.data(),
        }

        await deleteDoc(productRef);

        return product;
    } catch (e) {
        console.error('Error al obtener el producto: ', e);
    }
};