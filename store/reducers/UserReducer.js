import { SIGNUP, RESTORE_USER, LOGIN, LOGOUT, ADD_USER_INFO, FETCH_USER_INFO, ERROR } from "../actions/UserActions";


const initialState = {
    email: undefined,
    idToken: undefined,
    localId: undefined,
    username: undefined,
    programme: undefined,
    registered: undefined,
    users: [],
    errorMessage: ''
  
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP:
            return {...state, email: action.payload.email, idToken: action.payload.idToken, localId: action.payload.localId, errorMessage: ''}

        case LOGIN:
            // console.log("reducer login", action.payload)
            return {...state, email: action.payload.email, idToken: action.payload.idToken, localId: action.payload.localId, registered: action.payload.registered, errorMessage: '' }

        case RESTORE_USER:
            return { ...state, idToken: action.payload.idToken, email: action.payload.email }

        case LOGOUT:
            return { ...state, idToken: undefined, email: undefined, username: undefined, programme: undefined, registered: false }
    
        case ADD_USER_INFO:
            // console.log("reducer adduserinfo", action.payload)
            return { ...state, username: action.payload.username, programme: action.payload.programme, localId: action.payload.id }

        case FETCH_USER_INFO:
            // console.log("reducer fetchuserinfo", action.payload)
            return { ...state, users: action.payload }
        case ERROR:
            return { ...state, errorMessage: action.payload.errorMessage }

        default:
            return state;
    }
};

export default userReducer;