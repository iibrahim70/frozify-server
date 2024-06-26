import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import sendResponse from '../utils/sendResponse';
import { ProductServices } from '../services/product.service';

const addProduct = catchAsync(async (req, res) => {
  const payload = req?.body;

  const result = await ProductServices.addProductFromDB(payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product added successfully!',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductsFromDB(req?.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All products retrieved successfully!',
    data: result,
  });
});

const getAllFlashSaleProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllFlashSaleProductsFromDB(
    req?.query,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Flash Sale products retrieved successfully!',
    data: result,
  });
});

const getAllPopularProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllPopularProductsFromDB(req?.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Popular products retrieved successfully!',
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const productId = req?.params?.id;

  const result = await ProductServices.getSingleProductFromDB(productId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrieved successfully!',
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const payload = req?.body;
  const productId = req?.params?.id;

  const result = await ProductServices.updateProductFromDB(payload, productId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully!',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const productId = req?.params?.id;

  const result = await ProductServices.deleteProductFromDB(productId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully!',
    data: result,
  });
});

export const ProductControllers = {
  addProduct,
  getAllProducts,
  getAllFlashSaleProducts,
  getAllPopularProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
