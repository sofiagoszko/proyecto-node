//Controller de productos
import { 
  getProductsModel, 
  getProductByIdModel,
  createProductModel,
  deleteProductModel,
  updateProductModel
} from '../models/Product.js'

export const getProducts = async (req, res) => {
  try {
    const products = await getProductsModel();
    const msg = products.length === 0 ? 'No hay productos cargados aun' : 'Aqui está la lista de productos disponibles';

    res.status(200).json({
      message: msg,
      products: products
    });
  } catch (e) {
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
}

export const getProductById = async (req, res) => {
  try {
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
  } catch (e) {
    res.status(500).json({ message: 'Error al obtener el producto' });
  }
}

export const createProduct = async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = await createProductModel(productData);

    res.status(201).json({
      message: 'Producto creado con éxito',
      product: newProduct
    });
  } catch (e) {
    res.status(500).json({ message: 'Error al crear el producto' });
  }
}

export const deleteProduct = async (req, res) => {
  try {
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
  } catch (e) {
    res.status(500).json({ message: 'Error al eliminar el producto' });
  }
}

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    const product = await updateProductModel(id, productData);

    if(!product){
      return res.status(404).json({
        message: 'Producto no encontrado',
      });
    }

    res.status(200).json({
      message: 'Producto modificado con éxito',
      product: product
    });
  } catch (e) {
    res.status(500).json({ message: 'Error al modificar el producto' });
  }
}
