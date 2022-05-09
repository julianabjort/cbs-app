import * as SecureStore from 'expo-secure-store';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

 
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
            await SecureStore.setItemAsync(email, data.email);
            await SecureStore.setItemAsync(idToken, data.idToken);
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
 
        if (!response.ok) {
            //There was a problem..
        } else {
             
            dispatch({type: LOGIN, payload: {email: email, idToken: data.idToken}})
            
        }
    };
 };


