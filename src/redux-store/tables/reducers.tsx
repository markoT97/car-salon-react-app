import {
  FETCH_SUPPLIERS,
  TableState,
  TablesActionTypes,
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
  UPDATE_BRAND,
  UPDATE_EQUIPMENT,
  UPDATE_ENGINE,
  UPDATE_MODEL,
  UPDATE_CAR,
  UPDATE_SELLER,
  ADD_SUPPLIER,
  ADD_EQUIPMENT,
  ADD_ENGINE,
  ADD_BRAND,
  ADD_MODEL,
  ADD_CAR,
  ADD_SELLER,
} from "./types";

const initialState: TableState = {
  suppliers: [],
  equipments: [],
  engines: [],
  brands: [],
  models: [],
  cars: [],
  sellers: [],
  selectedTable: false,

  updateTable: undefined,
};

function tablesReducer(
  state = initialState,
  action: TablesActionTypes
): TableState {
  switch (action.type) {
    case FETCH_SUPPLIERS:
      return { ...state, suppliers: action.payload };
    case ADD_SUPPLIER:
      return { ...state, suppliers: [action.payload, ...state.suppliers] };
    case UPDATE_SUPPLIER:
      const updateSupplier = action.payload;
      let updatedSuppliers = [];
      const currentSuppliers = state.suppliers;
      for (let i = 0; i < currentSuppliers.length; i++) {
        const currentSupplier = currentSuppliers[i];

        currentSupplier.supplierId === updateSupplier.supplierId
          ? updatedSuppliers.push(updateSupplier)
          : updatedSuppliers.push(currentSupplier);
      }
      return { ...state, suppliers: [...updatedSuppliers] };
    case DELETE_SUPPLIER:
      return {
        ...state,
        suppliers: [
          ...state.suppliers.filter((s) => s.supplierId !== action.payload),
        ],
      };
    case FETCH_EQUIPMENTS:
      return { ...state, equipments: action.payload };
    case ADD_EQUIPMENT:
      return { ...state, equipments: [action.payload, ...state.equipments] };
    case UPDATE_EQUIPMENT:
      const updateEquipment = action.payload;
      let updatedEquipments = [];
      const currentEquipments = state.equipments;
      for (let i = 0; i < currentEquipments.length; i++) {
        const currentEquipment = currentEquipments[i];

        currentEquipment.equipmentId === updateEquipment.equipmentId
          ? updatedEquipments.push(updateEquipment)
          : updatedEquipments.push(currentEquipment);
      }
      return { ...state, equipments: [...updatedEquipments] };
    case DELETE_EQUIPMENT:
      return {
        ...state,
        equipments: [
          ...state.equipments.filter((e) => e.equipmentId !== action.payload),
        ],
      };
    case FETCH_ENGINES:
      return { ...state, engines: action.payload };
    case ADD_ENGINE:
      return { ...state, engines: [action.payload, ...state.engines] };
    case UPDATE_ENGINE:
      const updateEngine = action.payload;
      let updatedEngines = [];
      const currentEngines = state.engines;
      for (let i = 0; i < currentEngines.length; i++) {
        const currentEngine = currentEngines[i];

        currentEngine.engineId === updateEngine.engineId
          ? updatedEngines.push(updateEngine)
          : updatedEngines.push(currentEngine);
      }
      return { ...state, engines: [...updatedEngines] };
    case DELETE_ENGINE:
      return {
        ...state,
        engines: [
          ...state.engines.filter((e) => e.engineId !== action.payload),
        ],
      };
    case FETCH_BRANDS:
      return { ...state, brands: action.payload };
    case ADD_BRAND:
      return { ...state, brands: [action.payload, ...state.brands] };
    case UPDATE_BRAND:
      const updateBrand = action.payload;
      let updatedBrands = [];
      const currentBrands = state.brands;
      for (let i = 0; i < currentBrands.length; i++) {
        const currentBrand = currentBrands[i];

        currentBrand.brandId === updateBrand.brandId
          ? updatedBrands.push(updateBrand)
          : updatedBrands.push(currentBrand);
      }
      return { ...state, brands: [...updatedBrands] };
    case DELETE_BRAND:
      return {
        ...state,
        brands: [...state.brands.filter((e) => e.brandId !== action.payload)],
      };
    case FETCH_MODELS:
      return { ...state, models: action.payload };
    case ADD_MODEL:
      return { ...state, models: [action.payload, ...state.models] };
    case UPDATE_MODEL:
      const updateModel = action.payload;
      let updatedModels = [];
      const currentModels = state.models;
      for (let i = 0; i < currentModels.length; i++) {
        const currentModel = currentModels[i];

        currentModel.modelId === updateModel.modelId
          ? updatedModels.push(updateModel)
          : updatedModels.push(currentModel);
      }
      return { ...state, models: [...updatedModels] };
    case DELETE_MODEL:
      return {
        ...state,
        models: [...state.models.filter((e) => e.modelId !== action.payload)],
      };
    case FETCH_CARS:
      return { ...state, cars: action.payload };
    case ADD_CAR:
      return { ...state, cars: [action.payload, ...state.cars] };
    case UPDATE_CAR:
      const updateCar = action.payload;
      let updatedCars = [];
      const currentCars = state.cars;
      for (let i = 0; i < currentCars.length; i++) {
        const currentCar = currentCars[i];

        currentCar.carId === updateCar.carId
          ? updatedCars.push(updateCar)
          : updatedCars.push(currentCar);
      }
      return { ...state, cars: [...updatedCars] };
    case DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter((e) => e.carId !== action.payload)],
      };
    case FETCH_SELLERS:
      return { ...state, sellers: action.payload };
    case ADD_SELLER:
      return { ...state, sellers: [action.payload, ...state.sellers] };
    case UPDATE_SELLER:
      const updateUser = action.payload;
      let updatedUsers = [];
      const currentUsers = state.sellers;
      for (let i = 0; i < currentUsers.length; i++) {
        const currentUser = currentUsers[i];

        currentUser.userId === updateUser.userId
          ? updatedUsers.push(updateUser)
          : updatedUsers.push(currentUser);
      }
      return { ...state, sellers: [...updatedUsers] };
    case DELETE_SELLER:
      return {
        ...state,
        sellers: [...state.sellers.filter((e) => e.userId !== action.payload)],
      };
    case SET_SELECTED_TABLE:
      return {
        ...state,
        selectedTable: action.payload,
      };
    case SET_UPDATE_TABLE:
      return {
        ...state,
        updateTable: action.payload,
      };
    default:
      return state;
  }
}

export default tablesReducer;
