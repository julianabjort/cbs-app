import { SIGNUP, RESTORE_USER, LOGIN, LOGOUT, ADD_USER_INFO } from "../actions/UserActions";


const initialState = {
    email: undefined,
    idToken: undefined,
    localId: undefined,
    username: undefined,
    programme: undefined
  
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return {...state, email: action.payload.email, idToken: action.payload.idToken}

        case LOGIN:
            console.log("reducer login", action.payload)
            return {...state, email: action.payload.email, idToken: action.payload.idToken, localId: action.payload.localId }

        case RESTORE_USER:
            return { ...state, idToken: action.payload.idToken, email: action.payload.email }

        case LOGOUT:
            return { ...state, idToken: undefined, email: undefined }
    
        case ADD_USER_INFO:
            console.log("reducer adduserinfo", action.payload)
            const newUsername = [...state.username, action.payload];
            const newProgramme = [...state.programme, action.payload];
            return { ...state, username: newUsername, programme: newProgramme }

        default:
            return state;
    }
};

export default userReducer;