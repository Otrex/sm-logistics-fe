import React from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { RootState, AppDispatch } from "./store";
import { updateStateObject } from "./utils";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useNavigator = () => {
  const [coords, setCoords] = React.useState({});
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const center = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
      setCoords({ ...coords, center });
    });
  }, [coords]);

  return coords;
};
export const useRouteChange = (route: string) => {
  const [bg, setBg] = React.useState(true);
  const router = useRouteMatch().url;

  React.useEffect(() => {
    if (router !== route) {
      setBg(false);
    } else {
      setBg(true);
    }
  }, [router, route]);
  return bg;
};

// type UseParamsStateType<T> = (defaultState: T) => [ ReturnType<typeof updateStateObject>, T ]

export function useFormState<T>(
  defaultState: T
): [T, ReturnType<typeof updateStateObject>] {
  const [form, setForm] = React.useState(defaultState);
  const setFormField = updateStateObject(form, setForm);
  return [form, setFormField];
}
