import React from "react";
import { H140, P16, Width75p } from "./StyledComponents";
import apple from "@assets/img/DownloadBTN.png";
import google from "@assets/img/DownloadBTNgoogle.png";
import phone from "@assets/img/App-Image.png";

export default function AvailableOn({img}: any) {
  return (
    <Width75p className="pt-24 bg-white">
      <div className="flex flex-row items-center">
        <div className="w-1/2 pr-40">
          <H140>We’re Available on Your App Store.</H140>
          <P16>
            Have SM Logistics at your finger tips. You can find us at
            your app store.
          </P16>
          <div className="mt-12">
            <div className="inline-block mr-6">
              <img src={apple} alt="apple store" />
            </div>
            <div className="inline-block">
              <img src={google} alt="google store" />
            </div>
          </div>
        </div>
        <div className="w-1/2 text-right flex items-end">
          <div className="inline-block">
            <img src={img || phone} alt="phone" />
          </div>
        </div>
      </div>
    </Width75p>
  );
}
