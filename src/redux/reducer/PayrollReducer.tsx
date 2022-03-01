import { EDITEMPLOYEE_FAILURE, EDITEMPLOYEE_REQUEST, EDITEMPLOYEE_SUCCESS, FETCH_EMPLOYEELIST_FAILURE, FETCH_EMPLOYEELIST_REQUEST, FETCH_EMPLOYEELIST_SUCCESS } from "../types/EmployeeTypes";

const initialState = {
    loading: false,
    error: '',
}

export const payrollReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_EMPLOYEELIST_REQUEST: return {
            ...state, loading: true
        }
        case FETCH_EMPLOYEELIST_SUCCESS: return {
            ...state, loading: false, error: '',
        }
        case FETCH_EMPLOYEELIST_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state;
    }
};