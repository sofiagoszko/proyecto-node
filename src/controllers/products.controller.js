import {
  getProductsModel,
  getProductByIdModel,
  createProductModel,
  deleteProductModel,
  updateProductModel
} from '../models/Product.js'

export const getProducts = async (req, res, next) => {
  try {
    const products = await getProductsModel();
    const msg = products.length === 0 ? 'No hay productos cargados aun' : 'Aqui está la lista de productos disponibles';

    res.status(200).json({
      message: msg,
      products: products
    });
  } catch (e) {
    next(e);
  }
}

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getProductByIdModel(id);

    if(!product){
      const err = new Error();
      err.status = 404;
      return next(err);
    }

    res.status(200).json({
      message: 'Información del producto solicitado',
      product: product
    });
  } catch (e) {
    next(e);
  }
}

export const createProduct = async (req, res, next) => {
  try {
    const newProduct = await createProductModel(req.body);

    res.status(201).json({
      message: 'Producto creado con éxito',
      product: newProduct
    });
  } catch (e) {
    next(e);
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await deleteProductModel(id);

    if(!product){
      const err = new Error();
      err.status = 404;
      return next(err);
    }

    res.status(200).json({
      message: 'Producto eliminado con éxito',
      product: product
    });
  } catch (e) {
    next(e);
  }
}

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await updateProductModel(id, req.body);

    if(!product){
      const err = new Error();
      err.status = 404;
      return next(err);
    }

    res.status(200).json({
      message: 'Producto modificado con éxito',
      product: product
    });
  } catch (e) {
    next(e);
  }
}
