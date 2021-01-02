export const LOGIN_USER = 'LOGIN_USER';

export function login(data) {
    return {
        type: LOGIN_USER,
        data
    }
}