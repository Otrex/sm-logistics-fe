export interface RequestOptions {
  method: RequestMethod;
  url: string;
  data?: ObjectANY;
  params?: ObjectANY;
  contentType?: string;
}

export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export type LoginParams  = {
  email: string,
  password: string;
}

export type RegistrationParams  = {
  email: string,
  password: string;
  firstName: string,
  lastName: string;
  phoneNumber: string;
}

export enum StatusState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  FAILED = 'FAILED'
}

export interface AuthState {
  isAuthenticated: boolean;
  user: {[key: string]: any } | null;
  status: StatusState;
  isRegistered: boolean;
}

export type ObjectANY = { [key: string]: any };
