import { environment } from "src/environment";
import { InjectionToken } from "@angular/core";
// import { ProductsService } from "./shared/services/products.service";

export const LOGIN_URL = environment.loginUrl;
export const LOGIN_URL_TOKEN = new InjectionToken("LOGIN_URL_TOKEN");
export const BASE_URL = environment.baseUrl;
export const BASE_URL_TOKEN = new InjectionToken("BASE_URL_TOKEN");
