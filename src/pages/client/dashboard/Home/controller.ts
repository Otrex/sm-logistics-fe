/* eslint-disable react-hooks/rules-of-hooks */
import { StateManager, urlPath } from "@app/utils";
import { useState } from "react";

export default class DashboardHomeController extends StateManager<any> {
  url!: (dta: string) => string;
  showModal!: boolean;
  showSideNav!: boolean;
  showNotification!: boolean;
  notifications!: any[];
  to!: {
    expressPickup: string;
    schedulePickup: string;
    trackDelivery: string;
  };
  userDetails = {
    name: "Damilola Adewale",
    showMoreInfo: "sample@mail.com",
    userThumbnail: "",
  };
  user: any = {};
  history = [
    {
      status: "completed",
      action: () => {
        alert("hello");
      },
      destination: "Nat Geo Wild",
      price: 2000,
      itemCategory: "Furniture",
    },
    {
      status: "in_progress",
      action: () => {
        alert("hello");
      },
      destination: "Nat Geo Wild",
      price: 2000,
      itemCategory: "Furniture",
    },
    {
      status: "canceled",
      action: () => {
        alert("hello");
      },
      destination: "Nat Geo Wild",
      price: 2000,
      itemCategory: "Furniture",
    },
  ];
  setShowModal!: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSideNav!: React.Dispatch<React.SetStateAction<boolean>>;
  setShowNotification!: React.Dispatch<React.SetStateAction<boolean>>;

  setup() {
    [this.showModal, this.setShowModal] = useState<boolean>(false);
    [this.showSideNav, this.setShowSideNav] =
      useState<boolean>(false);
    [this.showNotification, this.setShowNotification] =
      useState<boolean>(false);

    this.url = urlPath("/client/dashboard");
    this.notifications = [];

    this.to = {
      expressPickup: this.url("/express-pickup"),
      schedulePickup: this.url("/schedule-pickup"),
      trackDelivery: this.url("/track-delivery"),
    };
    // this.user = this.props.user;
    this.user.todos = [
      {
        title: "Validate Email Address",
        content:
          "We sent you an email. Please click the link attached in the mail to confirm your registration.",
      },
    ];
    return this;
  }

  closeModal = () => {
    this.setShowModal(false);
  };

  toggleNav = () => {
    console.log("entered");

    this.setShowSideNav((value) => !value);
  };

  toggleNotifications = () => {
    console.log("entered 2nd");
    this.setShowNotification((value) => !value);
  };

  viewAll = () => {};
}
