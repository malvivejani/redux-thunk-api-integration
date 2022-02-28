import axios from "axios";
import { EDITEMPLOYEE_FAILURE, EDITEMPLOYEE_REQUEST, EDITEMPLOYEE_SUCCESS, FETCH_EMPLOYEELIST_FAILURE, FETCH_EMPLOYEELIST_REQUEST, FETCH_EMPLOYEELIST_SUCCESS, } from "../types/EmployeeTypes";

export const employeeListRequest = () => {
    return {
        type: FETCH_EMPLOYEELIST_REQUEST
    }
};

export const employeeListSuccess = (employee: any) => {
    return {
        type: FETCH_EMPLOYEELIST_SUCCESS,
        payload: employee
    }
};

export const employeeListFailure = (error: any) => {
    return {
        type: FETCH_EMPLOYEELIST_FAILURE,
        payload: error
    }
};


export const editEmployeeRequest = () => {
    return {
        type: EDITEMPLOYEE_REQUEST
    }
};

export const editEmployeeSuccess = () => {
    return {
        type: EDITEMPLOYEE_SUCCESS,
    }
};

export const editEmployeeFailure = (error: any) => {
    return {
        type: EDITEMPLOYEE_FAILURE,
        payload: error
    }
};

export const fetchEmployeeList = () => {
    return (dispatch: any) => {
        dispatch(employeeListRequest());
        axios.get('/employee').then(response => {
            const employee = response?.data;
            dispatch(employeeListSuccess(employee))
        }).catch(error => {
            const errmsg = error.message;
            dispatch(employeeListFailure(errmsg))
        });
    }
};

export const editEmployeeAPI = (id: any, body: any, onSuccess: any, onFailure: any) => {
    return (dispatch: any) => {
        dispatch(editEmployeeRequest());
        axios.patch(`/employee/${id}`, body).then(response => {
            debugger
            const employee = response?.data;
            dispatch(editEmployeeSuccess());
            onSuccess();
        }).catch(error => {
            debugger
            const errmsg = error.message;
            dispatch(editEmployeeFailure(errmsg))
            onFailure()
        });
    }
};

export const addEmployeeAPI = (body: any, onSuccess: any, onFailure: any) => {
    return (dispatch: any) => {
        dispatch(editEmployeeRequest());
        axios.post(`/employee/`, body).then(response => {
            debugger
            const employee = response?.data;
            console.log("add emp", response?.data);
            dispatch(editEmployeeSuccess());
            onSuccess();
        }).catch(error => {
            debugger
            const errmsg = error.message;
            dispatch(editEmployeeFailure(errmsg))
            onFailure()
        });
    }
};