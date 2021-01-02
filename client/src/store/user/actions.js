import {ApiService} from "../../services/ApiService";
import {LOGIN_USER} from "./types";

export const loginUser = (loginData) => {
    return async (dispatch) => {
        const response = await ApiService.post('users/login', loginData);
        console.log(response.data);
        return dispatch({type: LOGIN_USER, data: response.data});
    }
}