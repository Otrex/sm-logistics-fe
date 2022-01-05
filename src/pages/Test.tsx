import { mapStateOrActionToProps } from "@app/hoc";
import theme from "@app/theme";
import Send from "@assets/svg/Send";
import {
  logoutAsync,
  selectUser,
  updateUserDetails,
} from "@store/authSlice";
import {
  AccentButton,
  Button,
  Card,
  IconRounded,
  StyledPaymentCard,
} from "@ui-kit/ComponentTags";
import PhoneNumberInput from "@ui-kit/PhoneNumberInput";
import Input from "@ui-kit/Input";
import { P, H1, H2, H3, H4, H5, H6 } from "@ui-kit/TextTags";
import { useRef, useState } from "react";

import ForgotPassword from "./client/auth/ForgotPassword";
import Login from "./client/auth/Login";
import Register from "./client/auth/Register";
import ResetPassword from "./client/auth/ResetPassword";
import { useGetValue } from "@app/hooks";
import FileInput from "@ui-kit/FileInput";
import Select from "@ui-kit/Select";
import Modal from "@ui-kit/Modal";
import PaginationController from "@ui-kit/PaginationController";
import Tab from "@ui-kit/Tab";
import Lay303030 from "@components/layouts/Lay303030";
import DatePicker from "@ui-kit/DatePicker";
import LayAutoFullAuto from "@components/layouts/LayAutoFullAuto";
import Check from "@assets/svg/Check";
import TimeLine from "@ui-kit/TimeLine";
import OtpInput from "@ui-kit/OtpInput";

type Title = {
  title: string;
};

const View = ({ option }: any) => <div> Select: {option.name} </div>;

function Test({
  logg,
  userUpdate,
  user,
  title,
}: { logg: any; userUpdate: any; user: any } & Title) {
  const ref = useRef<any>();
  const [email, getEmail] = useGetValue("", (e: any) => {
    console.log(e.target.value);
    return true;
  });
  const [show, setShow] = useState(true);
  const [ctab, cTabSetter] = useState(0);
  return (
    <>
      <Login />
      <Register />
      <ForgotPassword />
      <ResetPassword />
      <H1> Header 1 </H1>
      <H2> Header 2 </H2>
      <H3> Header 3 </H3>
      <H4> Header 4 </H4>
      <H5> Header 5 </H5>
      <H6> Header 6 </H6>
      <P> Hello {user && user.firstName} </P>
      <Button
        // disabled
        textColor={theme.text_color.accent.dark_blue}
        bgColor={theme.bg_colors.accent.orange}
        onClick={(e: any) => {
          const v = ref.current!;
          console.log(v.value);
          logg();
          userUpdate({ firstName: email });
        }}
      >
        MENU {title}
      </Button>
      <LayAutoFullAuto>
        <Check></Check>
        <DatePicker />
        <IconRounded content={<Send width="17" height="17" />} dim />
      </LayAutoFullAuto>
      <IconRounded content={<Send width="17" height="17" />} dim />
      <IconRounded
        content={<Send pathFill="red" />}
        dim
        large
        hover
      />
      <IconRounded bright large>
        Obi{" "}
      </IconRounded>
      <Card>{title}</Card>
      <StyledPaymentCard> Hello </StyledPaymentCard>
      <Select label="first" options={["obi", "ada"]} />
      <Select
        label="second"
        options={[{ name: "obi" }, { name: "ada" }]}
      />
      <FileInput label="Passport"></FileInput>
      <Input
        getRef={ref}
        label={`Email of ${email}`}
        onChange={getEmail}
      ></Input>
      <Modal toggleShow={setShow} show={show}>
        <div className="bg-white">
          <H1> Hello world </H1>
        </div>
      </Modal>
      <PhoneNumberInput label="Phone input" />
      <PaginationController
        from={0}
        to={5}
        total={30}
        next={() => alert("next")}
        prev={() => alert("prev")}
      />
      <Lay303030>
        <Select
          label="second"
          options={[{ name: "obi" }, { name: "ada" }]}
          optionView={View}
          selectionView={View}
        />
        <Select
          label="second"
          options={[{ name: "obi" }, { name: "ada" }]}
        />
        <Select
          label="second"
          options={[{ name: "obi" }, { name: "ada" }]}
        />
        <Select
          label="second"
          options={[{ name: "obi" }, { name: "ada" }]}
        />
      </Lay303030>
      <Tab currentTab={1}>
        <div title="hello">
          <H1> Hello Testing 1..2..</H1>
        </div>
        <div title="hello 333">
          <H1>
            {" "}
            Hello Testing 1..2.. <div> From the second</div>
          </H1>
          <DatePicker value={"2000-11-03"} />

          <AccentButton> Get It </AccentButton>
        </div>
      </Tab>
      <Tab
        currentTab={ctab}
        trail
        moveOnTabClick
        tabSetter={cTabSetter}
      >
        <div title="MEN">
          <H1> Hello Testing 1..2..</H1>
        </div>
        <div title="WOMEN">
          <H1>
            {" "}
            Hello Testing 1..2.. <div> From the second</div>
          </H1>
          <AccentButton> Get It </AccentButton>
        </div>
        <div title="boy">
          <H1> Hello Testing 1..2..</H1>
        </div>
      </Tab>
      <DatePicker />
      <TimeLine dim="20px">
        <P className="py-3"> First Time </P>
        {/* <P className="py-3"> First Time </P>
        <P className="py-3"> First Time </P>
        <P className="py-3"> First Time </P>
        <P className="py-3"> First Time </P> */}
      </TimeLine>
      <OtpInput
        amount={5}
        onChange={(data: any) => console.log(data)}
        onCompleted={(data) => console.log(data)}
      />
      ;
    </>
  );
}

export default mapStateOrActionToProps<Title>({
  Component: Test,
  dispatchActions: {
    logg: logoutAsync,
    userUpdate: updateUserDetails,
  },
  states: {
    user: selectUser,
  },
});
