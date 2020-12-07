import {
  SET_PURCHASE_MODAL_VISIBILITY,
  SET_INSERT_MODAL_VISIBILITY,
  FETCH_SUPPLIERS,
  FETCH_EQUIPMENTS,
  FETCH_ENGINES,
  FETCH_BRANDS,
  FETCH_MODELS,
  SET_UPDATE_MODAL_VISIBILITY,
} from "./types";

import { getAll as getSuppliers } from "./../../data/services/supplierService";
import { getAll as getEquipments } from "./../../data/services/equipmentService";
import { getAll as getEngines } from "./../../data/services/engineService";
import { getAll as getBrands } from "./../../data/services/brandService";
import { getAll as getModels } from "./../../data/services/modelService";

export function setPurchaseModalVisibility(visibility: boolean) {
  return { type: SET_PURCHASE_MODAL_VISIBILITY, payload: visibility };
}

export function setInsertModalVisibility(visibility: boolean) {
  return { type: SET_INSERT_MODAL_VISIBILITY, payload: visibility };
}

export function setUpdateModalVisibility(visibility: boolean) {
  return { type: SET_UPDATE_MODAL_VISIBILITY, payload: visibility };
}

export function fetchSuppliers() {
  return async (dispatch: any) => {
    const { data } = await getSuppliers("all");

    return dispatch({ type: FETCH_SUPPLIERS, payload: data });
  };
}
export function fetchEquipments() {
  return async (dispatch: any) => {
    const { data } = await getEquipments();

    return dispatch({ type: FETCH_EQUIPMENTS, payload: data });
  };
}
export function fetchEngines() {
  return async (dispatch: any) => {
    const { data } = await getEngines("all");

    return dispatch({ type: FETCH_ENGINES, payload: data });
  };
}
export function fetchBrands() {
  return async (dispatch: any) => {
    const { data } = await getBrands("all");

    return dispatch({ type: FETCH_BRANDS, payload: data });
  };
}
export function fetchModels() {
  return async (dispatch: any) => {
    const { data } = await getModels("all");

    return dispatch({ type: FETCH_MODELS, payload: data });
  };
}
