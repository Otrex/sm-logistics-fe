import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginParams, RegistrationParams } from "types/api";
import api from "@api/auth";

export default class AuthAction {
  static title = "riderAuth";
  static formName = (name: string) => `${AuthAction.title}/${name}`;

  static login = createAsyncThunk(
    AuthAction.formName("login"),
    async (data: LoginParams) => {
      const res = await api.loginClient(data);
      return { data: "red" };
    }
  );

  static register = createAsyncThunk(
    AuthAction.formName("register"),
    async (data: RegistrationParams) => {
      const res = await api.loginClient(data);
      return { data: "red" };
    }
  );

  static forgotPassword = createAsyncThunk(
    AuthAction.formName("forgotPassword"),
    async (data: RegistrationParams) => {
      const res = await api.loginClient(data);
      return { data: "red" };
    }
  );

  static resetPassword = createAsyncThunk(
    AuthAction.formName("resetPassword"),
    async (data: RegistrationParams) => {
      const res = await api.loginClient(data);
      return { data: "red" };
    }
  );

  static emailVerify = createAsyncThunk(
    AuthAction.formName("emailVerify"),
    async (data: { otp: string }) => {
      console.log(data);
      const res = await api.loginClient(data as any);
      return { data: "red" };
    }
  );
}
