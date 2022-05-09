import { SIGNUP } from "../actions/UserActions";
import { LOGIN } from "../actions/UserActions"

const initialState = {
    email: undefined,
    idToken: undefined,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return {...state, email: action.payload.email, idToken: action.payload.idToken}

        case LOGIN:
            return {...state, email: action.payload.email, idToken: action.payload.idToken}

        default:
            return state;
    }
};

export default userReducer;