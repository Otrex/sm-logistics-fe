import { P14Bold } from "@pages/landing/components/StyledComponents";
import {
  AccentButton,
  Button,
  TextArea,
} from "@ui-kit/ComponentTags";
import Input from "@ui-kit/Input";
import PhoneNumberInput from "@ui-kit/PhoneNumberInput";
import DashboardExpressPickUpController from "./controller";

const AddDestination = (state: DashboardExpressPickUpController) => (
  <div title="Destination">
    <div className="">
      <div className="flex md:flex-row flex-col">
        <div className="w-full md:w-1/2 md:mt-6 mt-6 mb-9 md:mb-0 md:mr-6">
          <P14Bold className="mb-6">From</P14Bold>
          <Input
            label="Enter your address"
            onChange={state.setDestinationFrom}
          />
        </div>
        <div className="w-full md:w-1/2 md:mt-6 mt-6 mb-9 md:mb-0 md:ml-6 md:hidden block">
          <PhoneNumberInput
            label="Your Phone Number"
            onChange={state.setDestinationMyPhoneNo}
          />
        </div>
        <div className="w-full md:w-1/2 md:mt-6 mt-6 mb-9 md:mb-0 md:ml-6">
          <P14Bold className="mb-6">To</P14Bold>
          <Input
            label="Enter destination"
            onChange={state.setDestinationTo}
          />
        </div>
      </div>

      <div className="flex md:flex-row flex-col">
        <div className="w-full md:w-1/2 md:mt-6 mt-6 mb-9 md:mb-0 md:mr-6">
          <P14Bold className="mb-6">Receiver Details</P14Bold>
          <Input
            label="Full Name"
            onChange={state.setDestinationName}
          />
        </div>
        <div className="w-full md:w-1/2 md:mt-6 mt-6 mb-9 md:mb-0 md:ml-6">
          <P14Bold className="mb-6">&nbsp;</P14Bold>
          <PhoneNumberInput
            label="Phone Number"
            onChange={state.setDestinationPhoneNo}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 mb-9 md:mt-12 mt-6 md:mb-0 md:mr-6 md:pr-6 pr-0">
        <TextArea
          placeholder="Note"
          className="w-full"
          onChange={state.setDestinationNote}
        ></TextArea>
      </div>

      <div className="flex flex-row justify-between mt-80">
        <Button
          className="hidden md:inline-block"
          width={"auto"}
          onClick={state.previous}
          // disabled={!state.isReady}
        >
          {" "}
          Previous{" "}
        </Button>
        <AccentButton
          className="md:w-auto w-full"
          onClick={state.continue}
          disabled={!state.isReady.second}
          nowidth
        >
          {" "}
          Continue{" "}
        </AccentButton>
      </div>
    </div>
  </div>
);

export default AddDestination;
