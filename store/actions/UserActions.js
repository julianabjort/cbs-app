import * as SecureStore from 'expo-secure-store';
import { User } from '../../entities/User';


export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const RESTORE_USER = 'RESTORE_USER';
export const ADD_USER_INFO = 'ADD_USER_INFO';
export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const ERROR = 'ERROR';

export const logout = () => {
    SecureStore.deleteItemAsync('email');
    SecureStore.deleteItemAsync('token');
    return { type: LOGOUT }
}

export const restoreUser = (email, token) => {
    return { type: RESTORE_USER, payload: { email, idToken: token } };
};

export const signup = (email, password, navigation) => {
   return async dispatch => {
       const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5yESumjBrlpxQ_N-IL-PmlDor7oH4Cy8', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({ //javascript to json
               //key value pairs of data you want to send to server
               // ...

               email: email,
               password: password,
               returnSecureToken: true
           })
       });
       const data = await response.json(); // json to javascript
       console.log("sign up data action", data)

       if (!response.ok) {
            dispatch({ type: ERROR, payload: { errorMessage: data.error.message } });
       } else {
            await SecureStore.setItemAsync('email', data.email);
            await SecureStore.setItemAsync('token', data.idToken);
            dispatch({type: SIGNUP, payload: {email: data.email, idToken: data.idToken, localId: data.localId}})
            navigation.navigate("Start")
       }
   };
};

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5yESumjBrlpxQ_N-IL-PmlDor7oH4Cy8', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...
                email: email,
                password: password,
                returnSecureToken: true
            })
        });
        const data = await response.json(); // json to javascript
        console.log("login data action", data)
        
 
        if (!response.ok) {
            dispatch({ type: ERROR, payload: { errorMessage: data.error.message } });
        
        } else {
            await SecureStore.setItemAsync('email', data.email);
            await SecureStore.setItemAsync('token', data.idToken); 
            dispatch({type: LOGIN, payload: {email: email, idToken: data.idToken, localId: data.localId, registered: data.registered}})
            
        }
    };
 };

 export const addUserInfo = (username, programme) => {
    
    return async (dispatch, getState) => {
        const idToken = getState().user.idToken
        const id = getState().user.localId

        const response = await fetch('https://cbs-webdev-default-rtdb.europe-west1.firebasedatabase.app/users.json?auth=' + idToken, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                id: id,
                username: username, 
                programme: programme
            })
        });
        const data = await response.json(); 
 
        if (!response.ok) {
            console.log("Error")
        } else {

            dispatch({type: ADD_USER_INFO, payload: {username: username, programme: programme, id: id} })  
        };
 };
};

export const fetchUserInfo = () => {
    return async (dispatch, getState) => {
        const idToken = getState().user.idToken
        const id = getState().user.localId
        const response = await fetch(
            'https://cbs-webdev-default-rtdb.europe-west1.firebasedatabase.app/users.json?auth='
            + idToken, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json(); // json to javascript
        // console.log("data", data)
        // console.log("ID", id)

        if (!response.ok) {
            //There was a problem..
        } else {

            let users = [];
            for (let key in data) {
                const userObject = data[key]
                const user = new User(userObject.id, userObject.username, userObject.programme)
                console.log("data key", data[key])
                users.push(user)
            }
           
            dispatch({ type: FETCH_USER_INFO, payload: users })
        }
    };
};


