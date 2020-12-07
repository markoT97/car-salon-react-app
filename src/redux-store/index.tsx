import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import vehicleListReducer from "./vehicleList/reducers";
import vehicleListFiltersReducer from "./vehicleListFilters/reducers";
import userProfileReducer from "./userProfile/reducers";
import modalsReducer from "./modals/reducers";
import tablesReducer from "./tables/reducers";

const rootReducer = combineReducers({
  vehicleList: vehicleListReducer,
  vehicleListFilters: vehicleListFiltersReducer,
  userProfile: userProfileReducer,
  modals: modalsReducer,
  tables: tablesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
