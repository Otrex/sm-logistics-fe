/* eslint-disable react-hooks/rules-of-hooks */
import { StateManager } from "@app/utils";
import { ForgotPasswordParams } from "types/api";
import { useState } from "react";
import { FormSetterType } from "types/app.t";

export default class ForgotPasswordController extends StateManager<any> {
  form!: ForgotPasswordParams;
  setform!: FormSetterType;
  isReady!: boolean;
  setMatch!: React.Dispatch<React.SetStateAction<boolean>>;

  setup() {
    [this.isReady, this.setMatch] = useState<boolean>(false);
    [this.form, this.setform] = this.formState<ForgotPasswordParams>({
      email: "",
    });

    return this;
  }

  setEmail = (e: any) => {
    this.setform({ email: e.target.value });
  };

  validateForm() {
    console.log("validated regoister form");
  }

  submit = () => {
    this.validateForm();
    this.props.forgotPassword(this.form);
  };

  watch() {
    this.effect(() => {
      this.setMatch(Boolean(this.form.email));
    }, [this.form.email]);
  }
}
