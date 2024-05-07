import { Schema, model } from 'mongoose';

const productSchema = new Schema<IProduct>(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    productTitle: {
      type: String,
      required: true,
    },
    brandName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPercent: {
      type: Number,
      default: 0,
    },
    flashSale: {
      type: Boolean,
      default: false,
    },
    images: {
      type: [String],
      required: true,
    },
    inStock: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      lowercase: true,
    },
    subCategory: {
      type: String,
      required: true,
      lowercase: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 5,
    },
    numberOfRatings: {
      type: Number,
      default: 10,
    },
  },
  { timestamps: true },
);

export const Product = model<IProduct>('Product', productSchema);
