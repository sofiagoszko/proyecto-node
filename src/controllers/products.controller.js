//Controller de productos
import { 
  getProductsModel, 
  getProductByIdModel
} from '../models/Product.js'

export const getProducts = async (req, res) => {
  const products = await getProductsModel();
  const msg = products.length === 0 ? 'No hay productos cargados aun' : 'Aqui está la lista de productos disponibles';

  res.status(200).json({
    message: msg,
    products: products
  });
}

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await getProductByIdModel(id);

  if(!product){
    return res.status(404).json({
      message: 'Prodcuto no encontrado',
    });
  }

  res.status(200).json({
    message: 'Información del producto solicitado',
    product: product
  });

}