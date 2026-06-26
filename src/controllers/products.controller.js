//Controller de productos
import { getProductsModel } from '../models/Product.js'

export const getProducts = async (req, res) => {
    const products = await getProductsModel();
    const msg = products.length === 0 ? 'No hay productos cargados aun' : 'Aqui está la lista de productos disponibles';
 
    res.status(200).json({
      message: msg,
      products: products
    });

}