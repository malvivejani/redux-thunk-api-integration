import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../types/LoginTypes";

const initialState = {
    login: [],
    loading: false,
    error: '',
}

export const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_REQUEST: return {
            ...state, loading: true
        }
        case LOGIN_SUCCESS: return {
            ...state, loading: false, login: action.payload
        }
        case LOGIN_FAILURE: return {
            ...state, loading: false, login: [], error: action.payload
        }
        default: return state;
    }
};