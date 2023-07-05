export interface IUserRequest {
  email: string;
  password: string;
}

export interface ICreateUserRequest extends IUserRequest {
  name: string;
  avatar: string | null;
}

export interface IUserResponse extends ICreateUserRequest {
  id: number;
  role: string;
}
export interface ISaveChangeRequest {
  name: string;
  email: string;
  password: string;
  avatar: string | null;
}

export interface ITokenResponse {
  access_token: string;
  refresh_token: string;
}

export interface IHttpErrorResponse {
  error: { statusCode: number; message: string };
  headers: any;
  message: string;
  name: string;
  ok: false;
  status: number;
  statusText: string;
  url: string;
}

export interface ICheckTheEmailRequest {
  email: string;
}

export interface ICheckTheEmailResponse {
  isAvailable: boolean;
}
