import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Staffs } from "./staffs";
import { Departments } from "./departments";
import { StaffSalary } from "./staffsSalary";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      staffs: Staffs,
      departments: Departments,
      staffsalary: StaffSalary,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
