import { StateManager } from "@app/utils";
import { useState } from "react";

type IsReadyType = {
  first: boolean;
  second: boolean;
  third: boolean;
};

type ModalTypes = {
  payment: boolean;
  confirm: boolean;
  riderInfo: boolean;
};

type FormType = {
  items: {
    category: string;
    quantity: string;
    weight: string;
  }[];
  destination: {
    to: string;
    from: string;
    fullName: string;
    phoneNumber: string;
    myPhoneNumber?: string;
    note?: string;
  };
};

export default class DashboardExpressPickUpController extends StateManager<any> {
  setShowModal!: (v: Partial<ModalTypes>) => void;
  setCurrentTab!: React.Dispatch<React.SetStateAction<number>>;
  isReadySetter!: (v: Partial<IsReadyType>) => void;
  formSetter!: (v: Partial<FormType>) => void;
  categoryOptions!: any[];
  showModal!: ModalTypes;
  currentTab!: number;
  isReady!: IsReadyType;
  form!: FormType;

  setup() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    [this.currentTab, this.setCurrentTab] = useState(2);
    [this.form, this.formSetter] = this.formState({
      items: [
        {
          category: "",
          quantity: "",
          weight: "",
        },
      ],
      destination: {
        to: "",
        from: "",
        fullName: "",
        phoneNumber: "",
        myPhoneNumber: undefined,
        note: undefined,
      },
    });
    [this.isReady, this.isReadySetter] = this.formState({
      first: false,
      second: false,
      third: false,
    });
    [this.showModal, this.setShowModal] = this.formState({
      payment: false,
      confirm: false,
      riderInfo: false,
    });
    this.categoryOptions = ["Furniture"];
    return this;
  }

  watch() {
    this.effect(() => {
      console.log(this.form);

      if (!Object.values(this.form.items[0]).some((v) => !v)) {
        this.isReadySetter({ first: true });
      }
      if (
        this.form.destination.to &&
        this.form.destination.from &&
        this.form.destination.fullName &&
        this.form.destination.phoneNumber
      ) {
        this.isReadySetter({ second: true });
      }
    }, [this.form]);
  }

  setItemCategory = (idx: number) => (value: any) => {
    const items = [...this.form.items];
    items[idx].category = value;
    this.formSetter({ items: items });
  };

  setItemWeight = (idx: number) => (value: any) => {
    const items = [...this.form.items];
    items[idx].weight = value;
    this.formSetter({ items: items });
  };

  setItemQuantity = (idx: number) => (value: any) => {
    const items = [...this.form.items];
    items[idx].quantity = value;
    this.formSetter({ items: items });
  };

  setDestinationName = (e: any) => {
    this.formSetter({
      destination: {
        ...this.form.destination,
        fullName: e.target.value,
      },
    });
  };

  setDestinationTo = (e: any) => {
    this.formSetter({
      destination: { ...this.form.destination, to: e.target.value },
    });
  };

  setDestinationFrom = (e: any) => {
    this.formSetter({
      destination: { ...this.form.destination, from: e.target.value },
    });
  };

  setDestinationPhoneNo = (value: any) => {
    this.formSetter({
      destination: { ...this.form.destination, phoneNumber: value },
    });
  };

  setDestinationMyPhoneNo = (value: any) => {
    this.formSetter({
      destination: { ...this.form.destination, myPhoneNumber: value },
    });
  };

  setDestinationNote = (e: any) => {
    this.formSetter({
      destination: { ...this.form.destination, note: e.target.value },
    });
  };

  get items() {
    return this.form.items;
  }

  addMoreItems = () => {
    const items = [...this.form.items];
    items.push({ category: "", quantity: "", weight: "" });
    this.formSetter({ items: items });
  };

  cancel = (e: any) => {
    window.location.href = "/client/dashboard/home";
  };

  continue = (e: any) => {
    if (this.currentTab < 3) {
      this.setCurrentTab((value) => value + 1);
    }
  };

  previous = (e: any) => {
    if (this.currentTab > 0) {
      this.setCurrentTab((value) => value - 1);
    }
  };

  togglePaymentModal = () => {
    this.setShowModal({ payment: !this.showModal.payment });
  };

  toggleConfirmModal = () => {
    this.setShowModal({ confirm: !this.showModal.confirm });
  };

  toggleRiderInfoModal = () => {
    this.setShowModal({ riderInfo: !this.showModal.riderInfo });
  };

  submitForm = () => {
    //
    this.setShowModal({ payment: false, confirm: true });
  };
}
