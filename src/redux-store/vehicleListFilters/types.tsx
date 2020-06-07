import { Brand } from "../../data/models/Brand";
import { Model } from "../../data/models/Model";
import { Engine } from "../../data/models/Engine";
import { Supplier } from "../../data/models/Supplier";

export interface VehicleListFiltersState {
  brands: Array<Brand>;
  selectedBrand: Brand;
  models: Array<Model>;
  selectedModel: Model;
  engines: Array<Engine>;
  selectedEngine: Engine;
  suppliers: Array<Supplier>;
  selectedSupplier: Supplier;
}

export const FETCH_VEHICLE_BRANDS = "FETCH_VEHICLE_BRANDS";
export const SELECT_VEHICLE_BRAND = "SELECT_VEHICLE_BRAND";

export const FETCH_VEHICLE_MODELS = "FETCH_VEHICLE_MODELS";
export const SELECT_VEHICLE_MODEL = "SELECT_VEHICLE_MODEL";

export const FETCH_VEHICLE_ENGINES = "FETCH_VEHICLE_ENGINES";
export const SELECT_VEHICLE_ENGINE = "SELECT_VEHICLE_ENGINE";

export const FETCH_VEHICLE_SUPPLIERS = "FETCH_VEHICLE_SUPPLIERS";
export const SELECT_VEHICLE_SUPPLIER = "SELECT_VEHICLE_SUPPLIER";

interface FetchVehicleBrandsAction {
  type: typeof FETCH_VEHICLE_BRANDS;
  payload: Array<Brand>;
}

interface SelectVehicleBrandAction {
  type: typeof SELECT_VEHICLE_BRAND;
  payload: Brand;
}

interface FetchVehicleModelsAction {
  type: typeof FETCH_VEHICLE_MODELS;
  payload: Array<Model>;
}

interface SelectVehicleModelAction {
  type: typeof SELECT_VEHICLE_MODEL;
  payload: Model;
}

interface FetchVehicleEnginesAction {
  type: typeof FETCH_VEHICLE_ENGINES;
  payload: Array<Engine>;
}

interface SelectVehicleEngineAction {
  type: typeof SELECT_VEHICLE_ENGINE;
  payload: Engine;
}

interface FetchVehicleSuppliersAction {
  type: typeof FETCH_VEHICLE_SUPPLIERS;
  payload: Array<Supplier>;
}

interface SelectVehicleSupplierAction {
  type: typeof SELECT_VEHICLE_SUPPLIER;
  payload: Supplier;
}

export type VehicleListFiltersAction =
  | FetchVehicleBrandsAction
  | SelectVehicleBrandAction
  | FetchVehicleModelsAction
  | SelectVehicleModelAction
  | FetchVehicleEnginesAction
  | SelectVehicleEngineAction
  | FetchVehicleSuppliersAction
  | SelectVehicleSupplierAction;
