import AuthenticationState from '../types/AuthenticationState';

const initialState: AuthenticationState = {
    loggedIn: false,
    loggingIn: false,
    error: ""
}
const authenticationReducer = (state: AuthenticationState = initialState, action: any) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                ...state,
                loggingIn: true
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loggingIn: false,
                loggedIn: true
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                error: action.errorMessage
            };
        case 'NAVBAR_LOGOUT':
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                error: ""
            };
        default:
            return state;
    }
}

export default authenticationReducer;