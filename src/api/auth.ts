import { LoginParams, RegistrationParams, RequestMethod } from "types/api.types";
import Api from "./core";

export class AuthApi extends Api {
  loginClient = async (data: LoginParams) => {
    return this.__request({
      method: RequestMethod.POST,
      url: "/account/api/login",
      data,
    });
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
  }
}

export default new AuthApi()
