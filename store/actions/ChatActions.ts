export const ADD_CHATROOM = 'ADD_CHATROOM';
export const DELETE_CHATROOM = 'DELETE_CHATROOM'
export const FETCH_CHATROOMS = 'FETCH_CHATROOMS'
import { Chatroom } from "../../entities/Chatroom";

export const fetchChatrooms = () => {
    return async (dispatch: any, getState: any) => {
        const idToken = getState().user.idToken

        const response = await fetch(
            'https://cbs-webdev-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth='
            + idToken, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json(); // json to javascript
        if (!response.ok) {
            //There was a problem..
        } else {

            let chatrooms = [];
            for (const key in data) {
                let chatroom = new Chatroom(data[key].chatroomName, [], '', key)
                chatrooms.push(chatroom)
                // console.log(data[key].name)​;
                
            }
            chatrooms.reverse()
            dispatch({ type: FETCH_CHATROOMS, payload: chatrooms })
        }
    };
}

export const addChatroom = (chatroomName: string) => {
    return async (dispatch: any, getState: any) => {
        const idToken = getState().user.idToken
        const response = await fetch('https://cbs-webdev-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=' + idToken, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                chatroomName
            })
        });
        const data = await response.json(); // json to javascript
        console.log("add chatroom action", data) // why doesnt this contain chatroomName?
 
        if (!response.ok) {
            console.log("Error")
        } else {
            const chatroom = new Chatroom(chatroomName, [], '', data.name);
            dispatch({type: ADD_CHATROOM, payload: chatroom })  
        };
 };
};

export const deleteChatroom = (id: string) => {
    return async (dispatch: any, getState: any) => {
        const idToken = getState().user.idToken

        const response = await fetch(
            'https://cbs-webdev-default-rtdb.europe-west1.firebasedatabase.app/chatrooms/' + id + '.json/?auth='
            + idToken, {

            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const data = await response.json();
        if (!response.ok) {
            //There was a problem..
        } else {
            dispatch({ type: DELETE_CHATROOM, payload: id })
            console.log(id)
        }
    };
}
           

