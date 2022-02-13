import DashboardExpressPickUpController from "./controller";
import deliveryIcon from "@assets/img/deliveryicon.png";
import bag from "@assets/img/bag.png";
import { AccentButton, IconRounded } from "@ui-kit/ComponentTags";
import styled from "styled-components";
import { P16 } from "@pages/landing/components/StyledComponents";
import DropDown from "@ui-kit/DropDown";
import { P } from "@ui-kit/TextTags";

const Bordered = styled.div`
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 12px;
`;

const CurvedEdge = styled.div`
  border-radius: 3.2rem 3.2rem 0px 0px;
  box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.05), 0px 25px 35px rgba(51, 51, 51, 0.03);
`;

const MapContainer = styled.div`
background: grey;
height: 50vh;
margin-bottom: -3.2rem;
`;

const ConfirmPickUp = (state: DashboardExpressPickUpController) => (
  <div title="Confirm Details">
    <div className="md:block hidden"></div>
    <div className="md:hidden flex justify-between flex-col fixed bottom-0 h-vh-100-8rem left-0 w-full">
      <MapContainer>Map</MapContainer>
      <CurvedEdge className="bg-white py-12 px-11">
        <div className="flex justify-center mb-12">
          <IconRounded large dim>
            <img src={deliveryIcon} alt="delivery" />
          </IconRounded>
        </div>
        <Bordered className="flex flex-row justify-between items-center px-6 py-7">
          <div>
            <img className="inline-block" src={bag} alt="bag" />{" "}
            <P16 className="inline-block"> 5 Items </P16>
          </div>
          <div className="text-accent">N13,500</div>
        </Bordered>
        <div className="flex flex-row justify-between px-6 py-7">
          <div>
            <P>Payment Method</P>
          </div>
          <div>
            <DropDown label={<>Cash</>}>
              <span> Hi </span>
              <span> Hi2 </span>
            </DropDown>
          </div>
        </div>
        <div className="">
        <AccentButton
          className="md:w-auto w-full"
          onClick={state.continue}
          disabled={!state.isReady.second}
          nowidth
        >
          {" "}
          Confirm Request{" "}
        </AccentButton>
        </div>
      </CurvedEdge>
    </div>
  </div>
);

export default ConfirmPickUp;
