export interface IProductCarousel {
  path: string;
}

export interface IProductColor {
  color: string;
  value: string;
  isColor: boolean;
}

export interface IProductSize {
  size: string;
  isSize: boolean;
}

export type TProductColorSize = IProductColor | IProductSize;
