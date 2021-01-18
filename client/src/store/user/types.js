export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_USER = 'UPDATE_USER';

export function login(data) {
    return {
        type: LOGIN_USER,
        data
    }
}

export function logout() {
    return {
        type: LOGOUT_USER,
    }
}

export function update(data) {
    return {
        type: UPDATE_USER,
        data
    }
}