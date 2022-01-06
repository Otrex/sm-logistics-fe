/* eslint-disable react-hooks/rules-of-hooks */
import { StateManager } from "@app/utils";
import { useRouteMatch } from "react-router-dom";
import { ResetPasswordParams } from "types/api";
import { FormSetterType } from "types/app.t";

type ResetPasswordFormType = ResetPasswordParams & {
  confirmPassword: string;
};
export default class ResetPasswordController extends StateManager<any> {
  form!: ResetPasswordFormType;
  setform!: FormSetterType;
  status!: { isMatch: boolean; isReady: boolean };
  setStatus!: FormSetterType;
  routeMatch!: ReturnType<typeof useRouteMatch>;

  setup() {
    this.routeMatch = useRouteMatch();
    const params = this.routeMatch!.params as any;

    [this.status, this.setStatus] = this.formState({
      isMatch: false,
      isReady: false,
    });

    [this.form, this.setform] = this.formState({
      token: typeof params === "object" ? params.token : "",
      confirmPassword: "",
      password: "",
    });

    return this;
  }

  setConfirmPassword = (e: any) => {
    this.setform({ confirmPassword: e.target.value });
  };

  setPassword = (e: any) => {
    this.setform({ password: e.target.value });
  };

  validateForm() {
    console.log("validated regoister form");
  }

  submit = () => {
    this.validateForm();
    this.props.resetPassword(this.form);
  };

  watch() {
    this.effect(() => {
      this.setStatus({
        isMatch: Boolean(
          this.form.password === this.form.confirmPassword &&
            this.form.password
        ),
      });
    }, [this.form.confirmPassword, this.form.password]);

    this.effect(() => {
      this.setStatus({
        isReady: !Object.values(this.form).includes(""),
      });
      console.log(this.form);
    }, [this.form]);
  }
}
