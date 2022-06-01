import { CREATE_EVENT, DELETE_EVENT, FETCH_EVENTS } from "../actions/EventActions";

const initialState = {
  events: [],
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
      case CREATE_EVENT:
          const newEventArray = [...state.events, action.payload];
          return { ...state, events: newEventArray }
      case DELETE_EVENT:
          return {...state, events: state.events.filter(event => event.id !== action.payload)}
      case FETCH_EVENTS:
        console.log("Fetch events reducer", action.payload)
          return {...state, events: action.payload}
      default:
          return state; //does not do anything yet​   
  }
};

export default eventReducer;