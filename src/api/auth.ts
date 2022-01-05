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
  loginClient = async (data: LoginParams) => {
    return new Promise<{ data: { [key: string]: any } }>((resolve) =>
      setTimeout(() => resolve({ data: { status: "success" } }), 5000)
    );
    // return this.__request({
    //   method: RequestMethod.POST,
    //   url: '/account/api/login',
    //   data,
    // });
  };

  logoutClient = async () => {
    return this.__request({
      method: RequestMethod.GET,
      url: "/account/api/logout",
    });
  };

  registerClient = async (data: RegistrationParams) => {
    return this.__request({
      method: RequestMethod.POST,
      url: "/account/api/register",
      data,
    });
  };

  loginRider = async (data: LoginParams) => {
    return this.__request({
      method: RequestMethod.POST,
      url: "/account/api/login",
      data,
    });
  };

  logoutRider = async () => {
    return this.__request({
      method: RequestMethod.GET,
      url: "/account/api/logout",
    });
  };

  registerRider = async (data: RegistrationParams) => {
    return this.__request({
      method: RequestMethod.POST,
      url: "/account/api/register",
      data,
    });
  };
}

export default new AuthApi();
