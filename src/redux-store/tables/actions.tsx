import {
  FETCH_SUPPLIERS,
  FETCH_EQUIPMENTS,
  FETCH_ENGINES,
  FETCH_BRANDS,
  FETCH_MODELS,
  FETCH_CARS,
  FETCH_SELLERS,
  DELETE_SUPPLIER,
  DELETE_EQUIPMENT,
  DELETE_ENGINE,
  DELETE_BRAND,
  DELETE_MODEL,
  DELETE_CAR,
  DELETE_SELLER,
  SET_SELECTED_TABLE,
  SET_UPDATE_TABLE,
  UPDATE_SUPPLIER,
  UPDATE_CAR,
  UPDATE_SELLER,
  UPDATE_MODEL,
  UPDATE_BRAND,
  UPDATE_ENGINE,
  UPDATE_EQUIPMENT,
  ADD_SUPPLIER,
  ADD_EQUIPMENT,
  ADD_ENGINE,
  ADD_BRAND,
  ADD_MODEL,
  ADD_CAR,
  ADD_SELLER,
} from "./types";
import { getAll as getSuppliers } from "../../data/services/supplierService";
import { post as postSupplier } from "../../data/services/supplierService";
import { put as putSupplier } from "../../data/services/supplierService";
import { deleteItem as deleteSupplier } from "../../data/services/supplierService";

import { getAll as getEquipments } from "../../data/services/equipmentService";
import { post as postEquipment } from "../../data/services/equipmentService";
import { put as putEquipment } from "../../data/services/equipmentService";
import { deleteItem as deleteEquipment } from "../../data/services/equipmentService";

import { getAll as getEngines } from "../../data/services/engineService";
import { post as postEngine } from "../../data/services/engineService";
import { put as putEngine } from "../../data/services/engineService";
import { deleteItem as deleteEngine } from "../../data/services/engineService";

import { getAll as getBrands } from "../../data/services/brandService";
import { post as postBrand } from "../../data/services/brandService";
import { put as putBrand } from "../../data/services/brandService";
import { deleteItem as deleteBrand } from "../../data/services/brandService";

import { getAll as getModels } from "../../data/services/modelService";
import { post as postModel } from "../../data/services/modelService";
import { put as putModel } from "../../data/services/modelService";
import { deleteItem as deleteModel } from "../../data/services/modelService";

import { getAll as getCars } from "../../data/services/vehicleService";
import { post as postCar } from "../../data/services/vehicleService";
import { put as putCar } from "../../data/services/vehicleService";
import { deleteItem as deleteCar } from "../../data/services/vehicleService";

import { getAll as getSellers } from "../../data/services/userService";
import { post as postSeller } from "../../data/services/userService";
import { put as putSeller } from "../../data/services/userService";
import { deleteItem as deleteSeller } from "../../data/services/userService";

import { Supplier } from "../../data/models/Supplier";
import { Equipment } from "../../data/models/Equipment";
import { Engine } from "../../data/models/Engine";
import { Brand } from "../../data/models/Brand";
import { Model } from "../../data/models/Model";
import { Vehicle } from "../../data/models/Vehicle";
import { User } from "../../data/models/User";
import { RegisterModel } from "../../data/models/RegisterModel";

export function fetchAllSuppliers() {
  return async (dispatch: any) => {
    const { data } = await getSuppliers("all");

    return dispatch({ type: FETCH_SUPPLIERS, payload: data });
  };
}
export function addSupplier(supplier: Supplier) {
  return async (dispatch: any) => {
    const { data } = await postSupplier(supplier);

    return dispatch({ type: ADD_SUPPLIER, payload: data });
  };
}
export function updateSupplier(supplier: Supplier) {
  return async (dispatch: any) => {
    const { data } = await putSupplier(supplier);

    return dispatch({ type: UPDATE_SUPPLIER, payload: data });
  };
}
export function removeSupplier(id: number) {
  return async (dispatch: any) => {
    await deleteSupplier(id);

    return dispatch({ type: DELETE_SUPPLIER, payload: id });
  };
}

export function fetchAllEquipments() {
  return async (dispatch: any) => {
    const { data } = await getEquipments();

    return dispatch({ type: FETCH_EQUIPMENTS, payload: data });
  };
}
export function addEquipment(equipment: Equipment) {
  return async (dispatch: any) => {
    const { data } = await postEquipment(equipment);

    return dispatch({ type: ADD_EQUIPMENT, payload: data });
  };
}
export function updateEquipment(equipment: Equipment) {
  return async (dispatch: any) => {
    const { data } = await putEquipment(equipment);

    return dispatch({ type: UPDATE_EQUIPMENT, payload: data });
  };
}
export function removeEquipment(id: number) {
  return async (dispatch: any) => {
    await deleteEquipment(id);

    return dispatch({ type: DELETE_EQUIPMENT, payload: id });
  };
}

export function fetchAllEngines() {
  return async (dispatch: any) => {
    const { data } = await getEngines("all");

    return dispatch({ type: FETCH_ENGINES, payload: data });
  };
}
export function addEngine(engine: Engine) {
  return async (dispatch: any) => {
    const { data } = await postEngine(engine);

    return dispatch({ type: ADD_ENGINE, payload: data });
  };
}
export function updateEngine(engine: Engine) {
  return async (dispatch: any) => {
    const { data } = await putEngine(engine);

    return dispatch({ type: UPDATE_ENGINE, payload: data });
  };
}
export function removeEngine(id: number) {
  return async (dispatch: any) => {
    await deleteEngine(id);

    return dispatch({ type: DELETE_ENGINE, payload: id });
  };
}

export function fetchAllBrands() {
  return async (dispatch: any) => {
    const { data } = await getBrands("all");

    return dispatch({ type: FETCH_BRANDS, payload: data });
  };
}
export function addBrand(brand: Brand) {
  return async (dispatch: any) => {
    const { data } = await postBrand(brand);

    return dispatch({ type: ADD_BRAND, payload: data });
  };
}
export function updateBrand(brand: Brand) {
  return async (dispatch: any) => {
    const { data } = await putBrand(brand);

    return dispatch({ type: UPDATE_BRAND, payload: data });
  };
}
export function removeBrand(id: number) {
  return async (dispatch: any) => {
    await deleteBrand(id);

    return dispatch({ type: DELETE_BRAND, payload: id });
  };
}

export function fetchAllModels() {
  return async (dispatch: any) => {
    const { data } = await getModels("all");

    return dispatch({ type: FETCH_MODELS, payload: data });
  };
}
export function addModel(model: Model) {
  return async (dispatch: any) => {
    const { data } = await postModel(model);

    return dispatch({
      type: ADD_MODEL,
      payload: { ...model, modelId: data.modelId },
    });
  };
}
export function updateModel(model: Model) {
  return async (dispatch: any) => {
    await putModel(model);

    return dispatch({ type: UPDATE_MODEL, payload: model });
  };
}
export function removeModel(id: number) {
  return async (dispatch: any) => {
    await deleteModel(id);

    return dispatch({ type: DELETE_MODEL, payload: id });
  };
}

export function fetchAllCars() {
  return async (dispatch: any) => {
    const { data } = await getCars();

    return dispatch({ type: FETCH_CARS, payload: data });
  };
}
export function addCar(car: Vehicle) {
  return async (dispatch: any) => {
    const { data } = await postCar(car);

    return dispatch({ type: ADD_CAR, payload: { ...car, carId: data.carId } });
  };
}
export function updateCar(car: Vehicle) {
  return async (dispatch: any) => {
    await putCar(car);

    return dispatch({ type: UPDATE_CAR, payload: car });
  };
}
export function removeCar(id: number) {
  return async (dispatch: any) => {
    await deleteCar(id);

    return dispatch({ type: DELETE_CAR, payload: id });
  };
}

export function fetchAllSellers() {
  return async (dispatch: any) => {
    const { data } = await getSellers();

    return dispatch({ type: FETCH_SELLERS, payload: data });
  };
}
export function addSeller(seller: RegisterModel) {
  return async (dispatch: any) => {
    const { data } = await postSeller(seller);

    return dispatch({ type: ADD_SELLER, payload: data });
  };
}
export function updateSeller(seller: User) {
  return async (dispatch: any) => {
    const { data } = await putSeller(seller);

    return dispatch({ type: UPDATE_SELLER, payload: data });
  };
}
export function removeSeller(id: number) {
  return async (dispatch: any) => {
    await deleteSeller(id);

    return dispatch({ type: DELETE_SELLER, payload: id });
  };
}

export function setSelectedTable(name: string | boolean) {
  return { type: SET_SELECTED_TABLE, payload: name };
}

export function setUpdateTable(
  table: Supplier | Equipment | Engine | Brand | Model | Vehicle | User
) {
  return { type: SET_UPDATE_TABLE, payload: table };
}
