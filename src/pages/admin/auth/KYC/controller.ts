/* eslint-disable react-hooks/rules-of-hooks */
import { StateManager } from "@app/utils";
import { useState } from "react";
import { FormSetterType } from "types/app.t";

type KYCFormType = {
  aboutUs: string;
  resumption: string;
  locations: string[];
  passport: any;
  nationalId: any;
  driversLicense: any;
};

export default class KYCController extends StateManager<any> {
  form!: KYCFormType;
  setform!: FormSetterType;
  isReady!: boolean;
  setReady!: React.Dispatch<React.SetStateAction<boolean>>;
  aboutUsOptions!: string[];
  resumptionOptions!: string[];
  locationOptions!: string[];

  setup() {
    [this.isReady, this.setReady] = useState<boolean>(false);
    [this.form, this.setform] = this.formState({
      aboutUs: "",
      resumption: "",
      locations: [""],
      passport: null,
      nationalId: null,
      driversLicense: null,
    });

    this.aboutUsOptions = [];
    this.resumptionOptions = [];
    this.locationOptions = [];

    return this;
  }

  addMore = () => {
    this.setform({ locations: [...this.form.locations, ""] });
  };

  remove = (key: number) => {
    return () => {
      const locations = [...this.form.locations];
      locations.splice(key, 1);
      this.setform({ locations: locations });
    };
  };

  setAboutUs = (value: any) => {
    this.setform({ aboutUs: value });
  };

  setResumption = (value: any) => {
    this.setform({ resumption: value });
  };

  setLocations = (key: number) => {
    return (value: any) => {
      const locations = [...this.form.locations];
      locations[key] = value;
      this.setform({ locations: locations });
    };
  };

  setPassport = (e: any) => {
    this.setform({ passport: e.target.files[0] });
  };

  setNationalID = (e: any) => {
    this.setform({ nationalId: e.target.files[0] });
  };

  setDriversLicense = (e: any) => {
    this.setform({ driversLicense: e.target.files[0] });
  };

  validateForm() {
    console.log("validated regoister form");
  }

  submitForm = () => {
    this.validateForm();
    this.props.register(this.form);
  };

  watch() {
    this.effect(() => {}, [this.form]);
  }
}
