//Controller de productos
import { 
  getProductsModel, 
  getProductByIdModel,
  createProductModel,
  deleteProductModel
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
      message: 'Producto no encontrado',
    });
  }

  res.status(200).json({
    message: 'Información del producto solicitado',
    product: product
  });

}

export const createProduct = async (req, res) => {
  const productData = req.body;
  const newProduct = await createProductModel(productData);

  res.status(201).json({
    message: 'Producto creado con éxito',
    product: newProduct
  });
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await deleteProductModel(id);

  if(!product){
    return res.status(404).json({
      message: 'Producto no encontrado',
    });
  }

  res.status(200).json({
    message: 'Producto eliminado con éxito',
    product: product
  });

}