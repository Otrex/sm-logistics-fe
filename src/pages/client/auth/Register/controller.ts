/* eslint-disable react-hooks/rules-of-hooks */
import { StateManager } from "@app/utils";
import { useState } from "react";
import { FormSetterType } from "types/app.t";

type RegisterFormType = {
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
};
export default class RegisterController extends StateManager<any> {
  form!: RegisterFormType;
  setform!: FormSetterType;
  isMatch!: boolean;
  setMatch!: React.Dispatch<React.SetStateAction<boolean>>;

  setup() {
    [this.isMatch, this.setMatch] = useState<boolean>(false);
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

      console.log(
        this.form,
        this.form.password === this.form.confirmPassword &&
          this.form.password
      );
    }, [this.form.confirmPassword, this.form.password]);
  }
}
