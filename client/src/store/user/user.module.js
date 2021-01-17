import {LOGIN_USER, LOGOUT_USER} from "./types";

const defaultState = {
    authorizedUser: null,
}

const setTokenIfAbsent = (token) => {
    if (!token) {
        return;
    }
    if (!localStorage.getItem('token')) {
        localStorage.setItem('token', `Bearer ${token}`);
    }
}

export function userModule(state = defaultState, action) {
    switch (action.type) {

        case LOGIN_USER: {
            setTokenIfAbsent(action.data.token);
            return {
                ...state,
                authorizedUser: action.data,
            }
        }

        case LOGOUT_USER: {
            localStorage.removeItem('token');
            return {
                ...state,
                authorizedUser: null,
            }
        }

        default:
            return state;
    }
}