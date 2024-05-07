import QueryBuilder from '../builder/QueryBuilder';
import { Product } from '../models/product.model';

const addProductFromDB = async (payload: IProduct) => {
  const result = Product.create(payload);

  return result;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productsQuery = new QueryBuilder(Product.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await productsQuery.modelQuery;
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
