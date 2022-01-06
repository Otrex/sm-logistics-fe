export type LoginParams = {
  email: string;
  password: string;
};

export type RegistrationParams = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export type ForgotPasswordParams = {
  email: string;
};

export type ResetPasswordParams = {
  password: string;
  token: string;
};
