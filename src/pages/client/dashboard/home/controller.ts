import { StateManager, urlPath } from "@app/utils";
import { useState } from "react";

export default class DashboardHomeController extends StateManager<any> {
  url!: (dta: string) => string;
  showModal!: boolean;
  to!: {
    expressPickup?: string;
  };
  setShowModal!: React.Dispatch<React.SetStateAction<boolean>>;

  setup() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    [this.showModal, this.setShowModal] = useState<boolean>(true);
    this.url = urlPath("/client/dashboard");
    this.to = { expressPickup: this.url("/express-pickup") };
    return this;
  }

  closeModal = () => {
    this.setShowModal(false);
  };
}
