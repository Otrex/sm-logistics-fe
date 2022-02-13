import { StateManager } from "@app/utils";
import { FormSetterType } from "types/app.t";

type EmailVerifyFormType = {
  otp: string;
};
export default class EmailVerifyController extends StateManager<any> {
  form!: EmailVerifyFormType;
  setform!: FormSetterType;

  setup() {
    [this.form, this.setform] = this.formState({ otp: "" });
    return this;
  }

  setOTP = (value: any) => {
    this.setform({ otp: value });
  };

  validateForm() {
    console.log("validated regoister form");
  }

  submit = () => {
    this.validateForm();
    this.props.emailVerify(this.form);
  };
}
