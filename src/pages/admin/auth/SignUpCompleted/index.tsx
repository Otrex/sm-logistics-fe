import { LayCenterWithLogo } from "@components/layouts/LayCenter";
import SignUpCompletedPanel from "@pages/rider/components/SignUpCompletedPanel";
import React from "react";

export default function SignUpCompleted(props: any) {
  const login = () => {};
  return (
    <LayCenterWithLogo>
      <SignUpCompletedPanel {...props} />
    </LayCenterWithLogo>
  );
}
