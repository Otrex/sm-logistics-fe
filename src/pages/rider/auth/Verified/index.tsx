import { LayCenterWithLogo } from "@components/layouts/LayCenter";
import { AccentButton, IconRounded } from "@ui-kit/ComponentTags";
import Send from "@assets/svg/Send";
import { H2, P } from "@ui-kit/TextTags";
import React from "react";

export default function Verified(props: any) {
  return (
    <LayCenterWithLogo>
      <div>
        <div className="p-20 text-center">
          <div className="flex justify-center mb-20">
            <IconRounded large dim>
              <Send />
            </IconRounded>
          </div>
          <H2 className="text-center mb-4">
            Your Email has been Verified
          </H2>
          <P>
            We have confirmed your email and you are now ready to
            enjoy our services without limits.
          </P>
          <div className="mt-20">
            <AccentButton>Login</AccentButton>
          </div>
        </div>
      </div>
    </LayCenterWithLogo>
  );
}
