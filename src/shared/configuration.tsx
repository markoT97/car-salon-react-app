export const TOKEN_IN_LOCAL_STORAGE = "token";

export const USER_ROLES = {
  CUSTOMER: "Customer",
  SELLER: "Seller",
  ADMIN: "Admin",
};

export const suppliersDef = [{ name: "Sranje" }];

export const equipmentsDef = [
  { color: "Black", hasAbs: true, hasAirConditioning: false },
];

export const enginesDef = [
  { name: "Neki prvi", type: "Neki prvi tip", powerKW: 123 },
];

export const brandsDef = [{ name: "Neki prvi brend" }];

export const modelsDef = [
  {
    brandName: "Fiat",
    engineName: "TDI",
    name: "Neko prvo ime",
    numberOfDoors: 3,
    numberOfSeats: 5,
    gearboxType: "Manuelni",
    sideOfSteeringWheel: "Left",
    price: 234.5,
    currency: "$",
  },
];

export const carsDef = [
  {
    brandName: "Fiat",
    modelName: "Punto",
    supplierName: "TDI",
    chassisNumber: "dsdf3453",
    yearOfProduction: 2010,
  },
];

export const imagesDef = [
  {
    model: "Fiat",
    name: "slika1",
    extension: "jpg",
    path: "http://car/img",
    createdAt: "2020-02-27",
  },
];

export const sellersDef = [
  {
    role: "Seller",
    jmbg: "123",
    pib: undefined,
    email: "neko@gmail.com",
    address: "Neka adresa",
    imagePath: "img",
  },
];

export const TABLE_NAMES = {
  SUPPLIERS: "Suppliers",
  EQUIPMENTS: "Equipments",
  ENGINES: "Engines",
  BRANDS: "Brands",
  MODELS: "Models",
  CARS: "Cars",
  SELLERS: "Sellers",
  IMAGES: "Images",
};

export const SUPPLIER_COLUMNS: { [key: string]: string } = {
  name: "Name",
};

export const localizedSupplierColumns = Object.keys(suppliersDef[0]).map(
  (key: string, i) => SUPPLIER_COLUMNS[key]
);

export const EQUIPMENT_COLUMNS: { [key: string]: string } = {
  color: "Color",
  hasAbs: "Has ABS",
  hasAirConditioning: "Has Air Conditioning",
};

export const localizedEquipmentColumns = Object.keys(equipmentsDef[0]).map(
  (key: string, i) => EQUIPMENT_COLUMNS[key]
);

export const ENGINE_COLUMNS: { [key: string]: string } = {
  name: "Name",
  type: "Type",
  powerKW: "Power (KW)",
};

export const localizedEngineColumns = Object.keys(enginesDef[0]).map(
  (key: string, i) => ENGINE_COLUMNS[key]
);

export const BRAND_COLUMNS: { [key: string]: string } = {
  name: "Name",
};

export const localizedBrandColumns = Object.keys(brandsDef[0]).map(
  (key: string, i) => BRAND_COLUMNS[key]
);

export const MODEL_COLUMNS: { [key: string]: string } = {
  brandName: "Brand",
  engineName: "Engine",
  name: "Model",
  numberOfDoors: "Number of doors",
  numberOfSeats: "Number of seats",
  gearboxType: "Gearbox type",
  sideOfSteeringWheel: "Side of steering wheel",
  price: "Price",
  currency: "Currency",
};

export const localizedModelColumns = Object.keys(modelsDef[0]).map(
  (key: string, i) => MODEL_COLUMNS[key]
);

export const CAR_COLUMNS: { [key: string]: string } = {
  brandName: "Brand",
  modelName: "Model",
  supplierName: "Supplier",
  chassisNumber: "Chassis number",
  yearOfProduction: "Year of production",
};

export const localizedCarColumns = Object.keys(carsDef[0]).map(
  (key: string, i) => CAR_COLUMNS[key]
);

export const SELLER_COLUMNS: { [key: string]: string } = {
  role: "Role",
  jmbg: "JMBG",
  pib: "PIB",
  email: "Email",
  address: "Address",
  imagePath: "Image",
};

export const localizedUserColumns = Object.keys(sellersDef[0]).map(
  (key: string, i) => SELLER_COLUMNS[key]
);

export const IMAGE_COLUMNS: { [key: string]: string } = {
  imageId: "Image ID",
  model: "Model",
  name: "Name",
  extension: "Extension",
  path: "Path",
  createdAt: "Created at",
};

export const localizedImageColumns = Object.keys(imagesDef[0]).map(
  (key: string, i) => IMAGE_COLUMNS[key]
);
