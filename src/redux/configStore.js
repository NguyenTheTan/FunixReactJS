import { createStore, combineReducers } from "redux";
import { Staffs } from "./staffs";
import { Department } from "./department";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      staffs: Staffs,
      department: Department
    })
    );
    console.log('asdasdasdasdsad: ', store)
  return store;
};
