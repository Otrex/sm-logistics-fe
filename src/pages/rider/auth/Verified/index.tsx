import { LayCenterWithLogo } from "@components/layouts/LayCenter";
import VerifiedPanel from "@pages/client/auth/Verified/view";
import React from "react";

export default function Verified(props: any) {
  return (
    <LayCenterWithLogo>
      <VerifiedPanel {...props} />
    </LayCenterWithLogo>
  );
}
