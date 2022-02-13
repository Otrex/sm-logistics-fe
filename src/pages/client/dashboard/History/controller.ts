/* eslint-disable react-hooks/rules-of-hooks */
import { StateManager, urlPath } from "@app/utils";
import { useState } from "react";

export default class DashboardHistoryController extends StateManager<any> {
  url!: (dta: string) => string;
  showModal!: boolean;
  showSideNav!: boolean;
  notificationLength!: number;
  to!: {
    expressPickup: string;
    schedulePickup: string;
    trackDelivery: string;
  };
  userDetails = {
    fullName: "Damilola Adewale",
    otherInfo: "sample@mail.com",
    userThumbnail: "",
  };
  setShowModal!: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSideNav!: React.Dispatch<React.SetStateAction<boolean>>;

  setup() {
    [this.showModal, this.setShowModal] = useState<boolean>(true);
    [this.showSideNav, this.setShowSideNav] = useState<boolean>(true);

    this.url = urlPath("/client/dashboard");
    this.notificationLength = 0;
    this.to = {
      expressPickup: this.url("/express-pickup"),
      schedulePickup: this.url("/schedule-pickup"),
      trackDelivery: this.url("/track-delivery"),
    };
    return this;
  }

  closeModal = () => {
    this.setShowModal(false);
  };

  toggleNav = () => {
    this.setShowSideNav((value) => !value);
  };
}
