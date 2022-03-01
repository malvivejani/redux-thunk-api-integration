import axios from "axios"
import { PAYROLL_FAILURE, PAYROLL_REQUEST, PAYROLL_SUCCESS } from "../types/PayrollTypes"

export const addpayrollRequest = () => {
    return {
        type: PAYROLL_REQUEST,
    }
}

export const addpayrollSuccess = () => {
    return {
        type: PAYROLL_SUCCESS,
    }
}

export const addpayrollFailure = (error: any) => {
    return {
        type: PAYROLL_FAILURE,
        payload: error
    }
}

export const addPayrollAPI = (body: any, onSuccess: any) => {
    return async (dispatch: any) => {
        dispatch(addpayrollRequest());
        await axios.post('/payroll', body).then(response => {
            debugger
            console.log("payroll response", response);
            if (response?.data?.statusCode === 200) {
                dispatch(addpayrollSuccess());
                onSuccess();
            } else {
                dispatch(addpayrollFailure(response?.data?.message));
            }
        }).catch(error => {
            console.log("error", error);
            const errmsg = error?.message;
            dispatch(addpayrollFailure(errmsg));
        })
    }
}