export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IProductRating;
}

export interface IProductRating {
  rate: number;
  count: number;
}

export enum ENavMenu {
  Home = "Home",
  Electronics = "Electronics",
  Women = "Women's clothing",
  Men = "Men's clothing",
  Furniture = "Jewelry",
  Trending = "Trending",
  LessThen100$ = "Less than 100$",
}
export enum ECategory {
  Home = "",
  Electronics = "electronics",
  Women = "women's clothing",
  Men = "men's clothing",
  Furniture = "jewelery",
  Trending = "trending",
  LessThen100$ = "less than 100$",
}
export enum ENavLink {
  Home = "",
  Electronics = "electronics",
  Women = "women",
  Men = "men",
  Furniture = "jewelry",
  Trending = "trending",
  LessThen100$ = "less-than-100$",
}
