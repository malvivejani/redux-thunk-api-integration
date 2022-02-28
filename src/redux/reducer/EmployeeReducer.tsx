import { EDITEMPLOYEE_FAILURE, EDITEMPLOYEE_REQUEST, EDITEMPLOYEE_SUCCESS, FETCH_EMPLOYEELIST_FAILURE, FETCH_EMPLOYEELIST_REQUEST, FETCH_EMPLOYEELIST_SUCCESS } from "../types/EmployeeTypes";

const initialState = {
    employee: [],
    loading: false,
    error: '',
}

export const employeeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_EMPLOYEELIST_REQUEST: return {
            ...state, loading: true
        }
        case FETCH_EMPLOYEELIST_SUCCESS: return {
            ...state, loading: false, error: '', employee: action.payload
        }
        case FETCH_EMPLOYEELIST_FAILURE: return {
            ...state, loading: false, error: action.payload, employee: []
        }
        case EDITEMPLOYEE_REQUEST: return {
            ...state, loading: true
        }
        case EDITEMPLOYEE_SUCCESS: return {
            ...state, loading: false, error: ''
        }
        case EDITEMPLOYEE_FAILURE: return {
            ...state, loading: false, error: action.payload
        }
        default: return state;
    }
};