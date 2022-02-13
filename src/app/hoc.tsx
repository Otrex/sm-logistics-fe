import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
  useFormState,
} from "./hooks";
import {
  mapDispatchToProps,
  mapStateToProps,
  StateManager,
} from "./utils";

export function mapStateOrActionToProps<
  CProps = {},
  A = {},
  S = {},
  X = StateManager<CProps>
>(params: {
  Component: (props: any) => JSX.Element;
  dispatchActions?: A;
  states?: S;
  StateManager?: new (...args: any[]) => X;
}) {
  const { Component, dispatchActions, states, StateManager } = params;
  const HOC = (props: CProps) => {
    const dispatcher = useAppDispatch();
    let fullProps = { ...props };

    if (dispatchActions) {
      const mappedActions = mapDispatchToProps<A>(
        dispatchActions,
        dispatcher
      );
      fullProps = { ...fullProps, ...mappedActions };
    }

    if (states) {
      const mappedState = mapStateToProps<S>(states, useAppSelector);
      fullProps = { ...fullProps, ...mappedState };
    }

    if (StateManager) {
      const stateMngr = new StateManager(
        fullProps,
        useFormState,
        useEffect
      );
      (stateMngr as any).setup().watch();
      fullProps = { ...fullProps, stateMngr };
    }

    return <Component {...fullProps} />;
  };
  return HOC;
}
