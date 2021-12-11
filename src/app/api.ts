import config from "@app/config";
import axios from "axios";
import { RequestMethod, RequestOptions } from "types/app";

// axios.defaults.baseURL = process.env.REACT_APP_BE_URL;
const instance = axios.create();

export default class API {
  baseURI: string = config.baseURL!;

  xtoken!: string;

  expireCallback!: any;

  __parseCookie(): Record<string, any> {
    return Object.fromEntries(
      window.document.cookie.split(";").map((el) => el.split("="))
    );
  }

  __jsonRequest(requestOptions: RequestOptions) {
    const { data, params, contentType, url, method } = requestOptions;

    if (!params) requestOptions.params = {};
    if (!data) requestOptions.data = {};

    return instance.request({
      url,
      method,
      data,
      params: {
        ...params,
      },
      headers: {
        "Content-Type":
          contentType !== undefined ? contentType : "application/json",
        ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
      },
    });
  }

  async __request(requestOptions: RequestOptions) {
    const { method, data, params, contentType } = requestOptions;
    let { url } = requestOptions;
    let query = "";

    if (method === RequestMethod.GET) {
      query = Object.entries(data as Record<string, any>)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

      query = `?${query}`;
    }

    try {
      url = url.includes("http") ? url : `${this.baseURI}${url}${query}`;
      const res: any = await this.__jsonRequest({
        method,
        url,
        data,
        params,
        contentType,
      });

      if (res.data.status === "success") {
        return res.data;
      }
      return Promise.reject(res.data);
    } catch (e: any) {
      if (e.response) {
        if (e.response.status === 401) {
          window.document.cookie =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          window.document.cookie =
            "account=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          window.document.cookie =
            "kyc=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          if (!window.location.toString().includes("login")) {
            window.location.href = "/";
          }

          if (typeof this.expireCallback === "function") {
            this.expireCallback();
          }
        }
        return Promise.reject(e.response.data);
      }
      return Promise.reject(e);
    }
  }

  get token(): string | undefined {
    return this.__parseCookie().token;
  }

  setToken(token: string) {
    this.xtoken = token;
    window.document.cookie = `token=${token}; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
