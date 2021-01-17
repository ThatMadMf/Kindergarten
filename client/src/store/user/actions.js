import {ApiService, getAuthHeaders} from "../../services/ApiService";
import {LOGIN_USER} from "./types";

export const loginUser = (loginData) => {
    return async (dispatch) => {
        const response = await ApiService.post('users/login', loginData);
        return dispatch({type: LOGIN_USER, data: response.data});
    }
}

export const registerUser = (registerData) => {
    return async (dispatch) => {
        const response = await ApiService.post('users/register', registerData);
        return dispatch({type: LOGIN_USER, data: response.data});
    }
}

export const getUserData = () => {
    return async (dispatch) => {
        const response = await ApiService.get('users/data', getAuthHeaders());
        return dispatch({type: LOGIN_USER, data: response.data});
    }
}