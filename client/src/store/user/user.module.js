import {LOGIN_USER} from "./types";

const defaultState = {
    authorizedUser: null,
}

export function userModule(state = defaultState, action) {
    switch (action.type) {

        case LOGIN_USER: {
            return {
                ...state,
                authorizedUser: action.data,
            }
        }

        default:
            return state;
    }
}