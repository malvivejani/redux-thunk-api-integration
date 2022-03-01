import { combineReducers } from "redux";
import { employeeReducer } from "./EmployeeReducer";
import { loginReducer } from "./LoginReducer";
import { payrollReducer } from "./PayrollReducer";

const rootReducer = combineReducers({
    employee: employeeReducer,
    login: loginReducer,
    payroll: payrollReducer,
})

export default rootReducer;