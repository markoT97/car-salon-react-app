import { getAll as getBrands } from "../../data/services/brandService";
import { getAll as getModels } from "../../data/services/modelService";
import { getAll as getEngines } from "../../data/services/engineService";
import { getAll as getSuppliers } from "../../data/services/supplierService";
import {
  FETCH_VEHICLE_BRANDS,
  FETCH_VEHICLE_ENGINES,
  SELECT_VEHICLE_ENGINE,
  SELECT_VEHICLE_SUPPLIER,
  FETCH_VEHICLE_SUPPLIERS,
} from "./types";
import { Brand } from "../../data/models/Brand";
import { SELECT_VEHICLE_BRAND } from "../vehicleListFilters/types";
import { FETCH_VEHICLE_MODELS, SELECT_VEHICLE_MODEL } from "./types";
import { Model } from "../../data/models/Model";
import { Engine } from "../../data/models/Engine";
import { Supplier } from "../../data/models/Supplier";

export function fetchBrands(
  modelId?: number,
  engineId?: number,
  supplierId?: number
) {
  return async (dispatch: any) => {
    const { data } = await getBrands(
      "available",
      modelId,
      engineId,
      supplierId
    );

    dispatch({ type: FETCH_VEHICLE_BRANDS, payload: data });
  };
}

export function selectVehicleBrand(brand: Brand) {
  return { type: SELECT_VEHICLE_BRAND, payload: brand };
}

export function fetchModels(brandId?: number) {
  return async (dispatch: any) => {
    const { data } = await getModels("available", brandId);

    dispatch({ type: FETCH_VEHICLE_MODELS, payload: data });
  };
}

export function selectVehicleModel(model: Model) {
  return { type: SELECT_VEHICLE_MODEL, payload: model };
}

export function fetchEngines(brandId?: number) {
  return async (dispatch: any) => {
    const { data } = await getEngines("available", brandId);

    dispatch({ type: FETCH_VEHICLE_ENGINES, payload: data });
  };
}

export function selectVehicleSupplier(supplier: Supplier) {
  return { type: SELECT_VEHICLE_SUPPLIER, payload: supplier };
}

export function fetchAvailableSuppliers(brandId?: number) {
  return async (dispatch: any) => {
    const { data } = await getSuppliers("available", brandId);

    dispatch({ type: FETCH_VEHICLE_SUPPLIERS, payload: data });
  };
}

export function selectVehicleEngine(engine: Engine) {
  return { type: SELECT_VEHICLE_ENGINE, payload: engine };
}
