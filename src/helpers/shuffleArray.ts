import { IProduct } from '../interfaces/product.interface';

// Function to shuffle an array using Fisher-Yates algorithm
const shuffleArray = (array: IProduct[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default shuffleArray;
