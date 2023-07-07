import { IProduct } from "src/app/shared/types/products";

export interface IBag {
  bagProducts: IProductBag[];
  totalQuantity: number;
}

export interface IProductBag extends IProduct {
  size: string;
  colorName: string;
  quantity: number;
}
