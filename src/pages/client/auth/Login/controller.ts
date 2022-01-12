/* eslint-disable react-hooks/rules-of-hooks */
import { StateManager } from "@app/utils";
import { LoginParams } from "types/api";
import { useState } from "react";
import { FormSetterType } from "types/app.t";

export default class LoginLogic extends StateManager<any> {
  setMatch!: React.Dispatch<React.SetStateAction<boolean>>;
  setform!: FormSetterType;
  isReady!: boolean;
  form!: LoginParams;
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

  watch() {
    this.effect(() => {
      if (!this.form.email && !this.form.password) {
        this.setMatch(true);
      } else {
        this.setMatch(false);
      }
    }, [this.form]);
  }
}
