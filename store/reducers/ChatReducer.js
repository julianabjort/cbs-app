import { Chatroom } from "../../entities/Chatroom";
import { ADD_CHATROOM, DELETE_CHATROOM, FETCH_CHATROOMS } from "../actions/ChatActions";

const initialState = {
    chatrooms: [],
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHATROOM:
            const chatroom = new Chatroom(action.payload, [], '', action.payload.id);
            const newChatroomArray = [...state.chatrooms, chatroom];
            return { ...state, chatrooms: newChatroomArray }
        case DELETE_CHATROOM:
            return {...state, chatrooms: state.chatrooms.filter(chatroom => chatroom.id !== action.payload)}
        case FETCH_CHATROOMS:
            return {...state, chatrooms: action.payload}
        default:
            return state; //does not do anything yet​   
    }
};

export default chatReducer;