import { AccentButton } from "@ui-kit/ComponentTags";
import { H2, P } from "@ui-kit/TextTags";
import check from "@assets/img/CheckSuccess.png";

export default function SignUpCompletedPanel({
  stateMngr: state,
}: any) {
  return (
    <div className=" flex justify-center">
      <div className="p-20 text-center w-8/12">
        <div className="flex justify-center mb-20">
          <img src={check} alt="check" />
        </div>
        <H2 className="text-center mb-4">Signup Completed!</H2>
        <P>
          Thanks for your interest in SM Logistics. We’ll validate
          your details and get in touch soon.
        </P>
        <div className="mt-20">
          <AccentButton>Okay, Thanks</AccentButton>
        </div>
      </div>
    </div>
  );
}
