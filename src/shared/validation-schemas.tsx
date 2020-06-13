import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string().email().label("Email").required(),
  password: Yup.string().label("Password").required(),
});

export const registerValidationSchema = Yup.object({
  jmbg: Yup.number().label("JMBG").required(),
  firstName: Yup.string().label("First name").required(),
  lastName: Yup.string().label("Last name").required(),
  email: Yup.string().email().label("Email").required(),
  address: Yup.string().label("Address").required(),
  password: Yup.string().label("Password").required(),
});

export const updateValidationSchema = Yup.object({
  firstName: Yup.string().label("First name").required(),
  lastName: Yup.string().label("Last name").required(),
  email: Yup.string().email().label("Email").required(),
  address: Yup.string().label("Address").required(),
  password: Yup.string().label("Password").required(),
});

export const purchaseNewNaturalPersonValidationSchema = Yup.object({
  carType: Yup.string().label("Car type").required(),
  address: Yup.string().label("Address").required(),
  jmbg: Yup.number().label("JMBG").required(),
  firstName: Yup.string().label("First name").required(),
  lastName: Yup.string().label("Last name").required(),
  gender: Yup.string().label("Gender").max(1).required(),
});

export const purchaseOldNaturalPersonValidationSchema = Yup.object({
  carType: Yup.string().label("Car type").required(),
  jmbg: Yup.number().label("JMBG").required(),
});

export const purchaseNewLegalEntityValidationSchema = Yup.object({
  carType: Yup.string().label("Car type").required(),
  address: Yup.string().label("Address").required(),
  pib: Yup.number().label("PIB").required(),
  name: Yup.string().label("Name").required(),
});

export const purchaseOldLegalEntityValidationSchema = Yup.object({
  carType: Yup.string().label("Car type").required(),
  pib: Yup.number().label("PIB").required(),
});
