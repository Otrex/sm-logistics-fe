import { LoginParams, RegistrationParams } from "types/api";
import Api from "@app/api";

export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export class AuthApi extends Api {
  logoutClient = async () => {
    return this.__request({
      method: RequestMethod.GET,
      url: "/account/api/logout",
    });
  };

  loginClient = async (data: LoginParams) => {
    return this.__request({
      method: RequestMethod.POST,
      url: "/v1/auth/login",
      data: { ...data, type: "client" },
    });
  };

  registerClient = async (data: RegistrationParams) => {
    return this.__request({
      method: RequestMethod.POST,
      url: "/v1/auth/register",
      data: { ...data, type: "client" },
    });
  };

  loginRider = async (data: LoginParams) => {
    return this.__request({
      method: RequestMethod.POST,
      url: "/v1/auth/login",
      data: { ...data, type: "rider" },
    });
  };

  registerRider = async (data: RegistrationParams) => {
    return this.__request({
      method: RequestMethod.POST,
      url: "/v1/auth/register",
      data: { ...data, type: "rider" },
    });
  };
}

export default new AuthApi();
