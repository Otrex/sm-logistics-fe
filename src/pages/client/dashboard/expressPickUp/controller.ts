import { StateManager } from "@app/utils";
import { useState } from "react";

export default class DashboardExpressPickUpController extends StateManager<any> {
  showModal!: boolean;
  setShowModal!: React.Dispatch<React.SetStateAction<boolean>>;
}
