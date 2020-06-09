import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string().email().label("Email").required(),
  password: Yup.string().label("Password").required(),
});
