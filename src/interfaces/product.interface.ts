export interface IProduct {
  productName: string;
  productTitle: string;
  brandName: string;
  price: number;
  discountPercent: number;
  flashSale: boolean;
  images: string[];
  inStock: number;
  category: string;
  subCategory: string;
  productDescription: string;
  rating: number;
  numberOfRatings: number;
}
