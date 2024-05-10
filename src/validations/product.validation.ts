import { z } from 'zod';

const productValidationSchema = z.object({
  body: z.object({
    productName: z.string({
      required_error: 'Product Name is required.',
      invalid_type_error: 'Product Name must be a string.',
    }),
    productTitle: z.string({
      required_error: 'Product Title is required.',
      invalid_type_error: 'Product Title must be a string.',
    }),
    brand: z.string({
      required_error: 'Brand Name is required.',
      invalid_type_error: 'Brand Name must be a string.',
    }),
    price: z.number({
      required_error: 'Price is required.',
      invalid_type_error: 'Price must be a number.',
    }),
    images: z.array(z.string()).nonempty({
      message: 'At least one image is required.',
    }),
    inStock: z.number({
      required_error: 'In Stock is required.',
      invalid_type_error: 'In Stock must be a number.',
    }),
    category: z.string({
      required_error: 'Category is required.',
      invalid_type_error: 'Category must be a string.',
    }),
    subCategory: z.string({
      required_error: 'Sub Category is required.',
      invalid_type_error: 'Sub Category must be a string.',
    }),
    productDescription: z.string({
      required_error: 'Product Description is required.',
      invalid_type_error: 'Product Description must be a string.',
    }),
  }),
});

export default productValidationSchema;
