import { Product } from '../models/product.model';

const addProductFromDB = async (payload: IProduct) => {
  const result = Product.create(payload);

  return result;
};

const getAllProductsFromDB = async () => {
  const result = Product.find().sort({ createdAt: -1 });

  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = Product.findById(id);

  return result;
};

const updateProductFromDB = async (payload: IProduct, id: string) => {
  const result = Product.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = Product.findByIdAndDelete(id);

  return result;
};

export const ProductServices = {
  addProductFromDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
