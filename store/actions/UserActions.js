import * as SecureStore from 'expo-secure-store';
import { User } from '../../entities/User';


export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const RESTORE_USER = 'RESTORE_USER';
export const ADD_USER_INFO = 'ADD_USER_INFO'

export const logout = () => {
    SecureStore.deleteItemAsync('email');
    SecureStore.deleteItemAsync('token');
    return { type: LOGOUT }
}

export const restoreUser = (email, token) => {
    return { type: RESTORE_USER, payload: { email, idToken: token } };
};

export const signup = (email, password) => {
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

       if (!response.ok) {
           //There was a problem..
       } else {
            await SecureStore.setItemAsync('email', data.email);
            await SecureStore.setItemAsync('token', data.idToken);
            dispatch({type: SIGNUP, payload: {email: data.email, idToken: data.idToken}})

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
        console.log("login data", data)
 
        if (!response.ok) {
            //There was a problem..
        } else {
            await SecureStore.setItemAsync('email', data.email);
            await SecureStore.setItemAsync('token', data.idToken); 
            dispatch({type: LOGIN, payload: {email: email, idToken: data.idToken, localId: data.localId}})
            
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
            body: JSON.stringify({ //javascript to json 
                id: id,
                username: username, 
                programme: programme
            })
        });
        const data = await response.json(); // json to javascript
       
        console.log("add user info data", data) 
 
        if (!response.ok) {
            console.log("Error in addUserInfo async function")
        } else {

            const userData = getState().user
            console.log("user data", userData)

            // const userInfo = new User(id, username, programme, '');
            dispatch({type: ADD_USER_INFO, payload: {username: username, programme: programme, id: id} })  
        };
 };
};


