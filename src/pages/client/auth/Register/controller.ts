/* eslint-disable react-hooks/rules-of-hooks */
import { StateManager } from "@app/utils";
import { RegistrationParams } from "types/api";
import { useState } from "react";
import { FormSetterType } from "types/app.t";

type RegisterFormType = RegistrationParams & {
  confirmPassword: string;
};
export default class RegisterController extends StateManager<any> {
  form!: RegisterFormType;
  setform!: FormSetterType;
  isMatch!: boolean;
  setMatch!: React.Dispatch<React.SetStateAction<boolean>>;
  isReady!: boolean;
  setReady!: React.Dispatch<React.SetStateAction<boolean>>;

  setup() {
    [this.isMatch, this.setMatch] = useState<boolean>(false);
    [this.isReady, this.setReady] = useState<boolean>(false);
    [this.form, this.setform] = this.formState<RegisterFormType>({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    });

    return this;
  }

  setPassword = (e: any) => {
    this.setform({ password: e.target.value });
  };

  setConfirmPassword = (e: any) => {
    this.setform({ confirmPassword: e.target.value });
  };

  setFirstName = (e: any) => {
    this.setform({ firstName: e.target.value });
  };

  setLastName = (e: any) => {
    this.setform({ lastName: e.target.value });
  };

  setPhoneNumber = (e: any) => {
    this.setform({ confirmPassword: e });
  };

  setEmail = (e: any) => {
    this.setform({ email: e.target.value });
  };

  validateForm() {
    console.log("validated regoister form");
  }

  register = () => {
    this.validateForm();
    this.props.register(this.form);
  };

  watch() {
    this.effect(() => {
      this.setMatch(
        Boolean(
          this.form.password === this.form.confirmPassword &&
            this.form.password
        )
      );
    }, [this.form.confirmPassword, this.form.password]);
  }
}
