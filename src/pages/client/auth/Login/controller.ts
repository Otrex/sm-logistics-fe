import { StateManager } from "@app/utils";
import { FormSetterType } from "types/app.t";

type FormType = { email: string; password: string };

export default class LoginLogic extends StateManager<any> {
  setform!: FormSetterType;
  form!: FormType;
  sata: any;

  setup() {
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
