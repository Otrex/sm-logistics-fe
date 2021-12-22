import { TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from './store';

export const r = (el: string[]) => el.join(' ');

export const updateStateObject = (
  state: Record<string, any>,
  setter: React.Dispatch<React.SetStateAction<any>>
) => {
  return (key: string) => {
    return (value: any) => {
      setter({ ...state, ...Object.fromEntries([[key, value]]) });
    };
  };
};

export function mapDispatchToProps<A extends Record<string, any>>(
  actions: A,
  dispatcher: AppDispatch
) {
  let dispatchActions: any = {};
  for (const key in actions) {
    dispatchActions[key] = (data: Record<string, any>) =>
      dispatcher(actions[key](data));
    console.log(key);
  }
  console.log(dispatchActions);
  return dispatchActions;
}

export function mapStateToProps<S extends Record<string, any>>(
  states: S,
  appSelector: TypedUseSelectorHook<RootState>
) {
  let selectedState: any = {};
  for (const key in states) {
    selectedState[key] = appSelector(states[key]);
  }
  return selectedState;
}

export const urlPath =
  (base: string) =>
  (path: string = '') =>
    `${base}${path}`;

export const checkEmptyFields = (data: Record<string, any>) => {
  const errors: string[] = [];

  Object.entries(data).forEach(([key, value]) => {
    if (!value) errors.push(key);
  });

  if (errors.length > 0) {
    throw new Error(`the following fields ${errors.join(', ')} are empty`);
  }
};

export const getValue =
  (action: any, ...args: any) =>
  (e: any) =>
    action(e.target.value, ...args);
