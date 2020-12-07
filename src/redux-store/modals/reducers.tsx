import {
  SET_PURCHASE_MODAL_VISIBILITY,
  ModalActionTypes,
  SET_INSERT_MODAL_VISIBILITY,
  FETCH_SUPPLIERS,
  SET_UPDATE_MODAL_VISIBILITY,
  FETCH_MODELS,
} from "./types";
import { ModalState } from "./types";
import { FETCH_EQUIPMENTS, FETCH_ENGINES, FETCH_BRANDS } from "../tables/types";

const initialState: ModalState = {
  purchaseModal: {
    visibility: false,
  },
  insertModal: {
    visibility: false,
  },
  updateModal: {
    visibility: false,
  },
  data: {
    suppliers: [],
    equipments: [],
    engines: [],
    brands: [],
    models: [],
  },
};

function modalsReducer(
  state = initialState,
  action: ModalActionTypes
): ModalState {
  switch (action.type) {
    case SET_PURCHASE_MODAL_VISIBILITY:
      return {
        ...state,
        purchaseModal: { ...state.purchaseModal, visibility: action.payload },
      };
    case SET_INSERT_MODAL_VISIBILITY:
      return {
        ...state,
        insertModal: { ...state.insertModal, visibility: action.payload },
      };
    case SET_UPDATE_MODAL_VISIBILITY:
      return {
        ...state,
        updateModal: { ...state.updateModal, visibility: action.payload },
      };
    case FETCH_SUPPLIERS:
      return { ...state, data: { ...state.data, suppliers: action.payload } };
    case FETCH_EQUIPMENTS:
      return { ...state, data: { ...state.data, equipments: action.payload } };
    case FETCH_ENGINES:
      return { ...state, data: { ...state.data, engines: action.payload } };
    case FETCH_BRANDS:
      return { ...state, data: { ...state.data, brands: action.payload } };
    case FETCH_MODELS:
      return { ...state, data: { ...state.data, models: action.payload } };
    default:
      return state;
  }
}

export default modalsReducer;
