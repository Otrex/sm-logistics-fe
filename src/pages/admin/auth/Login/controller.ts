/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { StateManager } from "@app/utils";
import { FormSetterType } from "types/app.t";

type FormType = { email: string; password: string };

export default class LoginLogic extends StateManager<any> {
  setMatch!: React.Dispatch<React.SetStateAction<boolean>>;
  setform!: FormSetterType;
  isReady!: boolean;
  form!: FormType;
  sata: any;

  setup() {
    [this.isReady, this.setMatch] = useState<boolean>(false);
    const [form, setform] = this.formState({
      email: "",
      password: "",
    });
    this.form = form;
    this.setform = setform;

    return this;
  }

  setEmail = (e: any) => {
    this.setform({ email: e.target.value });
  };

  setPassword = (e: any) => {
    this.setform({ password: e.target.value });
  };

  validateForm() {
    console.log(this.form, this.sata);
  }

  login = async (e: any) => {
    e.preventDefault();
    this.validateForm();
    await this.props.login(this.form);
  };
}
