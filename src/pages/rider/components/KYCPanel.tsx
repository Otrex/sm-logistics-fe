import { AccentButton } from "@ui-kit/ComponentTags";
import { A, H1, H3 as H3lite, P } from "@ui-kit/TextTags";
import logo from "@assets/img/logo-full-colored.png";
import Select from "@ui-kit/Select";
import KYCController from "../auth/KYC/controller";
import FileInput from "@ui-kit/FileInput";
import styled from "styled-components";

const H3 = styled(H3lite)`
  color: #4f4f4f;
`;

export default function KYCPanel({
  stateMngr: state,
}: {
  stateMngr: KYCController;
}) {
  return (
    <div className="ppx-20 mppx-2_7 py-28">
      <img src={logo} alt="logo" />
      <H1 className="mt-8">Let’s Get to Know You</H1>
      <P>
        Thanks for your interest in SM Logistics, we’ll love to know
        you better. Please, provide the following details and we’ll
        reach out once we validate your information.
      </P>
      <section className="my-12">
        <H3 className="mb-9 txt-color-4F4F4F">Resumption</H3>
        <div className="flex flex-col md:flex-row">
          <div className="w-full mb-9 md:mb-0 md:mr-6">
            <Select
              label="How did you know about us?"
              options={state.aboutUsOptions}
              onChange={state.setAboutUs}
            />
          </div>
          <div className="w-full md:ml-6">
            <Select
              label="How soon can you resume?"
              options={state.resumptionOptions}
              onChange={state.setResumption}
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <H3 className="mb-9">
          Which Area of the City do you know Best?
        </H3>
        {state.form.locations.map((_, idx: number) => (
          <div className="flex flex-col md:flex-row mb-9" key={idx}>
            <div className="w-full mb-9 md:mb-0 md:mr-6">
              <Select
                label="Select Location"
                options={state.locationOptions}
                onChange={state.setLocations(idx)}
              />
            </div>
            <div className="w-full md:ml-6 flex items-center">
              {state.form.locations.length - 1 === idx ? (
                <A underline accent onClick={state.addMore}>
                  Add More
                </A>
              ) : (
                <A
                  underline
                  className="txt-color-red"
                  onClick={state.remove(idx)}
                >
                  Remove
                </A>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="mb-28">
        <H3 className="mb-9">Your Identity</H3>
        <div className="flex flex-col md:flex-row mb-9">
          <div className="w-full mb-9 md:mb-0 md:mr-6">
            <FileInput
              label="Passport Photo"
              onChange={state.setPassport}
            />
          </div>
          <div className="w-full md:ml-6">
            <FileInput
              label="National ID"
              onChange={state.setNationalID}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full mb-9 md:mb-0 md:mr-6">
            <FileInput
              label="Drivers License"
              onChange={state.setDriversLicense}
            />
          </div>
          <div className="w-full md:ml-6"></div>
        </div>
      </section>

      <AccentButton
        onClick={state.submitForm}
        disabled={!state.isReady}
      >
        {" "}
        Submit{" "}
      </AccentButton>
    </div>
  );
}
