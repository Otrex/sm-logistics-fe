import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginParams } from "types/api";
import api from "@api/auth";

export function Validate<T>() {
  return (target: any, propertyKey: string): void => {
    const type = `${target["title"]}/${propertyKey}`;
    console.log(type, target[propertyKey]);

    target[propertyKey] = createAsyncThunk(type, target[propertyKey]);
  };
}

export default class AuthAction {
  static title = "riderAuth";

  static formName = (name: string) => `${AuthAction.title}/${name}`;
  static login = createAsyncThunk(
    AuthAction.formName("login"),
    async (data: any) => {
      console.log(data, "red");
      const response = await api.loginClient(data);
      return { data: "red" };
    }
  );

  static register = createAsyncThunk(
    AuthAction.formName("register"),
    async (data: any) => {
      console.log(data, "red");
      const response = await api.loginClient(data);
      return { data: "red" };
    }
  );
}
