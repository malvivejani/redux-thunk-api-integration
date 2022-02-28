import { combineReducers } from "redux";
import { employeeReducer } from "./EmployeeReducer";
import { loginReducer } from "./LoginReducer";

const rootReducer = combineReducers({
    employee: employeeReducer,
    login: loginReducer,
})

export default rootReducer;