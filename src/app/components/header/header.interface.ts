export enum EPath {
  logo = "/",
  user = "/user",
  favorite = "/favorites",
  bag = "/bag",
}
export enum EIcons {
  logo = "../../../assets/img/icons/LOGO.svg",
  user = "../../../assets/img/icons/User-Icon.svg",
  favorite = "../../../assets/img/icons/heart.svg",
  bag = "../../../assets/img/icons/shope.svg",
}
export interface IIcons {
  path: EPath;
  icon: EIcons;
  alt: string;
}

// export interface ISearchProd {
//   id: number;
//   title: string;
// }
