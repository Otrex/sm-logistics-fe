import DashboardExpressPickUpController from "./controller";
import deliveryIcon from "@assets/img/deliveryicon.png";
import bag from "@assets/img/bag.png";
import {
  AccentButton,
  Button,
  IconRounded,
} from "@ui-kit/ComponentTags";
import styled from "styled-components";
import {
  P14Bold,
  P16,
} from "@pages/landing/components/StyledComponents";
import DropDown from "@ui-kit/DropDown";
import { A, P, P2Lite } from "@ui-kit/TextTags";
import TimeLine from "@ui-kit/TimeLine";
import LocationBlue from "@assets/svg/LocationBlue";
import WalletAccent from "@assets/svg/WalletAccent";

const Bordered = styled.div`
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 12px;
`;

const HR = styled.div`
  height: 85%;
  background: #bdbdbd;
  width: 1px;
`;
const CurvedEdge = styled.div`
  border-radius: 3.2rem 3.2rem 0px 0px;
  box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.05),
    0px 25px 35px rgba(51, 51, 51, 0.03);
`;

const MapContainer = styled.div`
  background: grey;
  height: 50vh;
  margin-bottom: -3.2rem;
`;

const P16Grey = styled(P)`
  color: #bdbdbd;
`;

const PBold = styled.p`
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.04em;
  color: ${(props) => props.color || "black"};
`;

type TimeLineTemplateProps = {
  address: string;
  state: string;
  color: string;
};
type IcoProps = {
  label: string;
  desc: string;
  ico: JSX.Element;
  dcolor?: string;
};
type ItemsProps = {
  itemName: string;
  amount: number;
  weightRange: string;
};

const TimeLineTemplate = (props: TimeLineTemplateProps) => {
  return (
    <>
      <div color={props.color} className="ml-9 pb-12 pt-1">
        <P2Lite>{props.address}</P2Lite>
        <P16Grey>{props.state}</P16Grey>
      </div>
    </>
  );
};

const Ico = (props: IcoProps) => {
  const { label, desc, ico, dcolor } = props;
  return (
    <>
      <div className="flex flex-row">
        <div>{ico}</div>
        <div className="pl-8">
          <P16Grey>{label}</P16Grey>
          <PBold color={dcolor}>{desc}</PBold>
        </div>
      </div>
    </>
  );
};

const ItemsTemplate = (props: ItemsProps) => {
  return (
    <>
      <div className="flex flex-row">
        <div className="">
          <img src={bag} alt="bag" />
        </div>
        <div className="ml-9 pb-12 pt-1">
          <P2Lite>
            {props.amount} {props.itemName}
          </P2Lite>
          <P16Grey>{props.weightRange} KG</P16Grey>
        </div>
      </div>
    </>
  );
};

const ConfirmPickUp = (state: DashboardExpressPickUpController) => (
  <div title="Confirm Details">
    <div className="md:block hidden">
      <P14Bold className="mb-4">Delivery Details</P14Bold>
      <div className="mt-4 flex flex-row">
        <div className="w-full pt-4 pr-14">
          <TimeLine>
            <TimeLineTemplate
              state="Shomolu, Lagos."
              color="#4F4F4F"
              address="12, Ogunmefun Street, Pedro"
            />
            <TimeLineTemplate
              state="Shomolu, Lagos."
              color="#008148"
              address="12, Ogunmefun Street, Pedro"
            />
          </TimeLine>
        </div>
        <div className="">
          <HR></HR>
        </div>
        <div className="w-full pl-20 pt-4">
          <ItemsTemplate
            amount={5}
            itemName="Furnitures"
            weightRange="11 - 15"
          />
          <ItemsTemplate
            amount={1}
            itemName="Parcel"
            weightRange="0 - 5"
          />
        </div>
      </div>
      <div>
        <A accent underline>
          Edit Details
        </A>
      </div>
      <div className="mt-9">
        <P14Bold className="mb-4">Payment Details</P14Bold>

        <div className="flex flex-row">
          <div className="w-full">
            <Ico
              ico={
                <IconRounded dim>
                  <LocationBlue />
                </IconRounded>
              }
              label="Distance"
              desc="32KM"
            />
          </div>
          <div className="w-full">
            <Ico
              ico={
                <IconRounded bright>
                  <WalletAccent />
                </IconRounded>
              }
              label="Price"
              desc="₦13,500"
              dcolor="#FAB60B"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-60">
        <Button
          className="hidden md:inline-block"
          width={"auto"}
          onClick={state.previous}
        >
          {" "}
          Previous{" "}
        </Button>
        <AccentButton
          className="md:w-auto w-full"
          onClick={state.togglePaymentModal}
          nowidth
        >
          {" "}
          Send Request{" "}
        </AccentButton>
      </div>
    </div>

    {/* For Mobile View */}
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
