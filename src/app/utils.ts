import React from "react";
import { TypedUseSelectorHook } from "react-redux";
import { FormStateType, UseEffectType } from "./hooks";
import { AppDispatch, RootState } from "./store";

export const r = (el: string[]) => el.join(" ");

export const updateStateObject = <T extends {}>(
  state: T,
  setter: React.Dispatch<React.SetStateAction<T>>
) => {
  return (data: Partial<T>) => {
    setter({ ...state, ...data });
  };
};

export const mapDispatchToProps = <A extends Record<string, any>>(
  actions: A,
  dispatcher: AppDispatch
) => {
  let dispatchActions: any = {};
  for (const key in actions) {
    dispatchActions[key] = (data: Record<string, any>) =>
      dispatcher(actions[key](data));
  }
  return dispatchActions;
};

export const mapStateToProps = <S extends Record<string, any>>(
  states: S,
  appSelector: TypedUseSelectorHook<RootState>
) => {
  let selectedState: any = {};
  for (const key in states) {
    selectedState[key] = appSelector(states[key]);
  }
  return selectedState;
};

export const urlPath =
  (base: string) =>
  (path: string = "") =>
    `${base}${path}`;

export const checkEmptyFields = (data: Record<string, any>) => {
  const errors: string[] = [];

  Object.entries(data).forEach(([key, value]) => {
    if (!value) errors.push(key);
  });

  if (errors.length > 0) {
    throw new Error(
      `the following fields ${errors.join(", ")} are empty`
    );
  }
};

export const getValue =
  (action: any, ...args: any) =>
  (e: any) =>
    action(e.target.value, ...args);

export interface IStateManager<P extends {}> {
  props: P;
  formState: FormStateType;
  watch: () => void;
  setup: () => void;
}

export class StateManager<Props> implements IStateManager<Props> {
  props: Props;
  effect: UseEffectType;
  formState: FormStateType;
  constructor(
    props: Props,
    FormState: FormStateType,
    effect: UseEffectType
  ) {
    this.formState = FormState;
    this.effect = effect;
    this.props = props;
  }

  setup() {
    return this;
  }
  watch() {}
}
