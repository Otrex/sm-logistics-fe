import React from "react";
import { Card, IconRounded } from "@ui-kit/ComponentTags";
import Send from "@assets/svg/Send";
import {
  Width75p,
  H316 as H3,
  P14,
  P16,
  H232,
} from "./StyledComponents";
import Lay303030 from "@components/layouts/Lay303030";
import CalendarYellow from "@assets/svg/CalendarYellow";
import LocationYellow from "@assets/svg/LocationYellow";

export default function OurServices() {
  return (
    <Width75p className="pt-28 pb-24">
      <div className="py-20 px-14 text-center">
        <H232 className="text-center">
          We Do the Delivery so You don’t Have to Stress.
        </H232>
        <P16 className="md:px-60 py-4">
          Here are the different ways SMLogistics saves you from
          delivery & dispatch stress.
        </P16>
      </div>
      <div className="">
        <Lay303030>
          <Card accent>
            <div>
              <IconRounded>
                <Send />
              </IconRounded>
            </div>
            <div className="p-4">
              <H3 className="mb-4">Express Pickup</H3>
              <P14>
                Fast track your item’s drop-off & get an immediate
                dispatch.
              </P14>
            </div>
          </Card>
          <Card borderColor="#E5E5E5">
            <div>
              <IconRounded>
                <CalendarYellow />
              </IconRounded>
            </div>
            <div className="p-4">
              <H3 className="mb-4">Schedule Pickup</H3>
              <P14>
                Have an upcoming logistics needs? Schedule a future
                pickup.
              </P14>
            </div>
          </Card>
          <Card borderColor="#E5E5E5">
            <div>
              <IconRounded>
                <LocationYellow />
              </IconRounded>
            </div>
            <div className="p-4">
              <H3 className="mb-4">Track Delivery</H3>
              <P14>
                Keep track of your item’s status using real-time data.
              </P14>
            </div>
          </Card>
        </Lay303030>
      </div>
    </Width75p>
  );
}
