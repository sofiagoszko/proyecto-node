export const default_user = {
    id: 1,
    name: 'User',
    email: 'user@email.com',
    password: 'strongPass123.',
    admin: true,
};

import db from '../config/firebase.js';
import { collection, addDoc, getDoc, getDocs, query, where} from 'firebase/firestore';

const usersCollection = collection(db, 'users');

export const findUserByEmailModel = async (email) => {
    try {
        const q = query(usersCollection, where('email', '==', email));
        const snapshot = await getDocs(q);

        if(!snapshot.empty){
            const doc = snapshot.docs[0];
            return {
                id: doc.id,
                email: doc.data().email,
            };
        }else{
            return null;
        }
    } catch (e) {
        console.error('Error al obtener el usuario: ', e);
        throw e;
    }
};

export const createUserModel = async (name, email, passHash) => {
    try {
        const userRef = await addDoc(usersCollection, { name, email, passHash });

        return {
            id: userRef.id,
            email: email
        };
    } catch (e) {
        console.error('Error al crear el usuario: ', e);
        throw e;
    }
}
