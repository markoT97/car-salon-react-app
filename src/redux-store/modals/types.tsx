import { Supplier } from "../../data/models/Supplier";
import { Equipment } from "../../data/models/Equipment";
import { Engine } from "../../data/models/Engine";
import { Brand } from "../../data/models/Brand";
import { Model } from "../../data/models/Model";

export interface ModalState {
  purchaseModal: {
    visibility: boolean;
  };
  insertModal: {
    visibility: boolean;
  };
  updateModal: {
    visibility: boolean;
  };
  data: {
    suppliers: Array<Supplier>;
    equipments: Array<Equipment>;
    engines: Array<Engine>;
    brands: Array<Brand>;
    models: Array<Model>;
  };
}

export const FETCH_SUPPLIERS = "FETCH_SUPPLIERS";
export const FETCH_EQUIPMENTS = "FETCH_EQUIPMENTS";
export const FETCH_ENGINES = "FETCH_ENGINES";
export const FETCH_BRANDS = "FETCH_BRANDS";
export const FETCH_MODELS = "FETCH_MODELS";

export const SET_PURCHASE_MODAL_VISIBILITY = "SET_PURCHASE_MODAL_VISIBILITY";
export const SET_INSERT_MODAL_VISIBILITY = "SET_INSERT_MODAL_VISIBILITY";
export const SET_UPDATE_MODAL_VISIBILITY = "SET_UPDATE_MODAL_VISIBILITY";

interface SetPurchaseModalVisibilityAction {
  type: typeof SET_PURCHASE_MODAL_VISIBILITY;
  payload: boolean;
}

interface SetInsertModalVisibilityAction {
  type: typeof SET_INSERT_MODAL_VISIBILITY;
  payload: boolean;
}

interface SetUpdateModalVisibilityAction {
  type: typeof SET_UPDATE_MODAL_VISIBILITY;
  payload: boolean;
}

interface FetchSuppliersAction {
  type: typeof FETCH_SUPPLIERS;
  payload: Array<Supplier>;
}
interface FetchEquipmentsAction {
  type: typeof FETCH_EQUIPMENTS;
  payload: Array<Equipment>;
}
interface FetchEnginesAction {
  type: typeof FETCH_ENGINES;
  payload: Array<Engine>;
}
interface FetchBrandsAction {
  type: typeof FETCH_BRANDS;
  payload: Array<Brand>;
}
interface FetchModelsAction {
  type: typeof FETCH_MODELS;
  payload: Array<Model>;
}

export type ModalActionTypes =
  | SetPurchaseModalVisibilityAction
  | SetInsertModalVisibilityAction
  | SetUpdateModalVisibilityAction
  | FetchSuppliersAction
  | FetchEquipmentsAction
  | FetchEnginesAction
  | FetchBrandsAction
  | FetchModelsAction;
