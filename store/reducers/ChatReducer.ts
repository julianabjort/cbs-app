import { Chatroom } from "../../entities/Chatroom";
import { ADD_CHATROOM, DELETE_CHATROOM, FETCH_CHATROOMS } from "../actions/ChatActions";

const initialState = {
    chatrooms: [],
};

export interface ActionInterface {
    type: string;
    payload: any;
    }

const chatReducer = (state = initialState, action: ActionInterface) => {
    switch (action.type) {
        case ADD_CHATROOM:
            const newChatroomArray = [...state.chatrooms, action.payload];
            return { ...state, chatrooms: newChatroomArray }
        case DELETE_CHATROOM:
            return {...state, chatrooms: state.chatrooms.filter((chatroom: Chatroom) => chatroom.id !== action.payload)}
        case FETCH_CHATROOMS:
            return {...state, chatrooms: action.payload}
        default:
            return state; //does not do anything yet​   
    }
};

export default chatReducer;