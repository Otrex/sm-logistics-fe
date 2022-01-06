import { LayCenterWithLogo } from "@components/layouts/LayCenter";
import VerifiedPanel from "@pages/client/components/VerifiedPanel";
import React from "react";

export default function Verified(props: any) {
  const login = () => {};
  return (
    <LayCenterWithLogo>
      <VerifiedPanel {...props} />
    </LayCenterWithLogo>
  );
}
