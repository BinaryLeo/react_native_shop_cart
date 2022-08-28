export interface IProduct {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  inStock: true;
 
}
export interface ICart{
  cart: IProduct[];
}