import {
  VehicleListFiltersState,
  VehicleListFiltersAction,
  FETCH_VEHICLE_BRANDS,
  SELECT_VEHICLE_BRAND,
  SELECT_VEHICLE_MODEL,
  FETCH_VEHICLE_MODELS,
  FETCH_VEHICLE_ENGINES,
  SELECT_VEHICLE_ENGINE,
  FETCH_VEHICLE_SUPPLIERS,
  SELECT_VEHICLE_SUPPLIER,
} from "./types";

const initialState: VehicleListFiltersState = {
  brands: [],
  selectedBrand: {
    brandId: 0,
    name: "",
  },
  models: [],
  selectedModel: {
    modelId: 0,
    brandId: 0,
    engineId: 0,
    equipmentId: 0,
    name: "",
    numberOfDoors: 0,
    numberOfSeats: 0,
    gearboxType: "",
    sideOfSteeringWheel: "",
    price: 0,
  },
  engines: [],
  selectedEngine: {
    engineId: 0,
    name: "",
    type: "",
    powerKW: 0,
  },
  suppliers: [],
  selectedSupplier: {
    supplierId: 0,
    name: "",
  },
};

function vehicleListFiltersReducer(
  state = initialState,
  action: VehicleListFiltersAction
): VehicleListFiltersState {
  switch (action.type) {
    case FETCH_VEHICLE_BRANDS:
      return { ...state, brands: action.payload };
    case SELECT_VEHICLE_BRAND:
      return { ...state, selectedBrand: action.payload };
    case FETCH_VEHICLE_MODELS:
      return { ...state, models: action.payload };
    case SELECT_VEHICLE_MODEL:
      return { ...state, selectedModel: action.payload };
    case FETCH_VEHICLE_ENGINES:
      return { ...state, engines: action.payload };
    case SELECT_VEHICLE_ENGINE:
      return { ...state, selectedEngine: action.payload };
    case FETCH_VEHICLE_SUPPLIERS:
      return { ...state, suppliers: action.payload };
    case SELECT_VEHICLE_SUPPLIER:
      return { ...state, selectedSupplier: action.payload };
    default:
      return state;
  }
}

export default vehicleListFiltersReducer;
