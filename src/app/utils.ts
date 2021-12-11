export const r = (el: string[]) => el.join(" ");

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
    throw new Error(`the following fields ${errors.join(", ")} are empty`);
  }
};
