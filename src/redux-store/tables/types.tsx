import { Supplier } from "../../data/models/Supplier";
import { Equipment } from "../../data/models/Equipment";
import { Engine } from "../../data/models/Engine";
import { Brand } from "../../data/models/Brand";
import { Model } from "../../data/models/Model";
import { Vehicle } from "../../data/models/Vehicle";
import { User } from "../../data/models/User";

export interface TableState {
  suppliers: Array<Supplier>;
  equipments: Array<Equipment>;
  engines: Array<Engine>;
  brands: Array<Brand>;
  models: Array<Model>;
  cars: Array<Vehicle>;
  sellers: Array<User>;
  selectedTable: string | boolean;

  updateTable:
    | Supplier
    | Equipment
    | Engine
    | Brand
    | Model
    | Vehicle
    | User
    | undefined;
}

export const FETCH_SUPPLIERS = "FETCH_SUPPLIERS";
export const ADD_SUPPLIER = "ADD_SUPPLIER";
export const UPDATE_SUPPLIER = "UPDATE_SUPPLIER";
export const DELETE_SUPPLIER = "DELETE_SUPPLIER";

export const FETCH_EQUIPMENTS = "FETCH_EQUIPMENTS";
export const ADD_EQUIPMENT = "ADD_EQUIPMENT";
export const UPDATE_EQUIPMENT = "UPDATE_EQUIPMENT";
export const DELETE_EQUIPMENT = "DELETE_EQUIPMENT";

export const FETCH_ENGINES = "FETCH_ENGINES";
export const ADD_ENGINE = "ADD_ENGINE";
export const UPDATE_ENGINE = "UPDATE_ENGINE";
export const DELETE_ENGINE = "DELETE_ENGINE";

export const FETCH_BRANDS = "FETCH_BRANDS";
export const ADD_BRAND = "ADD_BRAND";
export const UPDATE_BRAND = "UPDATE_BRAND";
export const DELETE_BRAND = "DELETE_BRAND";

export const FETCH_MODELS = "FETCH_MODELS";
export const ADD_MODEL = "ADD_MODEL";
export const UPDATE_MODEL = "UPDATE_MODEL";
export const DELETE_MODEL = "DELETE_MODEL";

export const FETCH_CARS = "FETCH_CARS";
export const ADD_CAR = "ADD_CAR";
export const UPDATE_CAR = "UPDATE_CAR";
export const DELETE_CAR = "DELETE_CAR";

export const FETCH_SELLERS = "FETCH_SELLERS";
export const ADD_SELLER = "ADD_SELLER";
export const UPDATE_SELLER = "UPDATE_SELLER";
export const DELETE_SELLER = "DELETE_SELLER";

export const SET_SELECTED_TABLE = "SET_SELECTED_TABLE";
export const SET_UPDATE_TABLE = "SET_UPDATE_TABLE";

interface FetchSuppliersAction {
  type: typeof FETCH_SUPPLIERS;
  payload: Array<Supplier>;
}
interface AddSuppliersAction {
  type: typeof ADD_SUPPLIER;
  payload: Supplier;
}
interface UpdateSupplierAction {
  type: typeof UPDATE_SUPPLIER;
  payload: Supplier;
}
interface DeleteSupplierAction {
  type: typeof DELETE_SUPPLIER;
  payload: number;
}

interface FetchEquipmentsAction {
  type: typeof FETCH_EQUIPMENTS;
  payload: Array<Equipment>;
}
interface AddEquipmentAction {
  type: typeof ADD_EQUIPMENT;
  payload: Equipment;
}
interface UpdateEquipmentAction {
  type: typeof UPDATE_EQUIPMENT;
  payload: Equipment;
}
interface DeleteEquipmentAction {
  type: typeof DELETE_EQUIPMENT;
  payload: number;
}

interface FetchEnginesAction {
  type: typeof FETCH_ENGINES;
  payload: Array<Engine>;
}
interface AddEngineAction {
  type: typeof ADD_ENGINE;
  payload: Engine;
}
interface UpdateEngineAction {
  type: typeof UPDATE_ENGINE;
  payload: Engine;
}
interface DeleteEngineAction {
  type: typeof DELETE_ENGINE;
  payload: number;
}

interface FetchBrandsAction {
  type: typeof FETCH_BRANDS;
  payload: Array<Brand>;
}
interface AddBrandAction {
  type: typeof ADD_BRAND;
  payload: Brand;
}
interface UpdateBrandAction {
  type: typeof UPDATE_BRAND;
  payload: Brand;
}
interface DeleteBrandAction {
  type: typeof DELETE_BRAND;
  payload: number;
}

interface FetchModelsAction {
  type: typeof FETCH_MODELS;
  payload: Array<Model>;
}
interface AddModelAction {
  type: typeof ADD_MODEL;
  payload: Model;
}
interface UpdateModelAction {
  type: typeof UPDATE_MODEL;
  payload: Model;
}
interface DeleteModelAction {
  type: typeof DELETE_MODEL;
  payload: number;
}

interface FetchCarsAction {
  type: typeof FETCH_CARS;
  payload: Array<Vehicle>;
}
interface AddCarAction {
  type: typeof ADD_CAR;
  payload: Vehicle;
}
interface UpdateCarAction {
  type: typeof UPDATE_CAR;
  payload: Vehicle;
}
interface DeleteCarAction {
  type: typeof DELETE_CAR;
  payload: number;
}

interface FetchSellersAction {
  type: typeof FETCH_SELLERS;
  payload: Array<User>;
}
interface AddSellerAction {
  type: typeof ADD_SELLER;
  payload: User;
}
interface UpdateSellerAction {
  type: typeof UPDATE_SELLER;
  payload: User;
}
interface DeleteSellerAction {
  type: typeof DELETE_SELLER;
  payload: number;
}

interface SetSelectTableAction {
  type: typeof SET_SELECTED_TABLE;
  payload: string | false;
}
interface SetUpdateTableAction {
  type: typeof SET_UPDATE_TABLE;
  payload: Supplier | Equipment | Engine | Brand | Model | Vehicle | User;
}

export type TablesActionTypes =
  | FetchSuppliersAction
  | AddSuppliersAction
  | UpdateSupplierAction
  | DeleteSupplierAction
  | FetchEquipmentsAction
  | AddEquipmentAction
  | UpdateEquipmentAction
  | DeleteEquipmentAction
  | FetchEnginesAction
  | AddEngineAction
  | UpdateEngineAction
  | DeleteEngineAction
  | FetchBrandsAction
  | AddBrandAction
  | UpdateBrandAction
  | DeleteBrandAction
  | FetchModelsAction
  | AddModelAction
  | UpdateModelAction
  | DeleteModelAction
  | FetchCarsAction
  | AddCarAction
  | UpdateCarAction
  | DeleteCarAction
  | FetchSellersAction
  | AddSellerAction
  | UpdateSellerAction
  | DeleteSellerAction
  | SetSelectTableAction
  | SetUpdateTableAction;
