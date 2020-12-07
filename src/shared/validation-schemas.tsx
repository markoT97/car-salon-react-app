import * as Yup from "yup";

const jmbgLength = 13;
const pibLength = 9;

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

export const registerNaturalPersonValidationSchema = Yup.object({
  jmbg: Yup.number()
    .test(
      "len",
      `Must be exactly ${jmbgLength} numbers`,
      (val) => !val || (val && val.toString().length === jmbgLength)
    )
    .label("JMBG")
    .required(),
  firstName: Yup.string().label("First name").required(),
  lastName: Yup.string().label("Last name").required(),
  gender: Yup.string().label("Gender").max(1).required(),
  address: Yup.string().label("Address").required(),
  email: Yup.string().email().label("Email").required(),
  password: Yup.string().label("Password").required(),
});

export const registerLegalEntityValidationSchema = Yup.object({
  pib: Yup.number()
    .test(
      "len",
      `Must be exactly ${pibLength} numbers`,
      (val) => !val || (val && val.toString().length === pibLength)
    )
    .label("PIB")
    .required(),
  name: Yup.string().label("Name").required(),
  address: Yup.string().label("Address").required(),
  email: Yup.string().email().label("Email").required(),
  password: Yup.string().label("Password").required(),
});

export const insertSupplierValidationSchema = Yup.object({
  name: Yup.string().label("Name").required(),
});

export const insertEquipmentValidationSchema = Yup.object({
  color: Yup.string().label("Color").required(),
  hasABS: Yup.boolean().label("Has ABS").required(),
  hasAirConditioning: Yup.boolean().label("Has Air Conditioning").required(),
});

export const insertEngineValidationSchema = Yup.object({
  name: Yup.string().label("Name").required(),
  type: Yup.string().label("Type").required(),
  powerKW: Yup.number().label("Power (KW)").required(),
});

export const insertBrandValidationSchema = Yup.object({
  name: Yup.string().label("Name").required(),
});

export const insertModelValidationSchema = Yup.object({
  brandId: Yup.number().label("Brand ID").required(),
  engineId: Yup.number().label("Engine ID").required(),
  equipmentId: Yup.number().label("Equipment ID").required(),
  name: Yup.string().label("Name").required(),
  numberOfDoors: Yup.number().label("Number of doors").required(),
  numberOfSeats: Yup.number().label("Number of seats").required(),
  gearboxType: Yup.string().label("Gearbox type").required(),
  sideOfSteeringWheel: Yup.string().label("Side of steering wheel").required(),
  price: Yup.number().label("Price").required(),
  currency: Yup.string().label("Currency").required(),
});

export const insertCarValidationSchema = Yup.object({
  brandId: Yup.number().label("Brand ID").required(),
  supplierId: Yup.number().label("Supplier ID").required(),
  chassisNumber: Yup.string().label("Chassis number").required(),
  yearOfProduction: Yup.number().label("Year of production").required(),
});
