import { CREATE_EVENT, DELETE_EVENT, FETCH_EVENTS } from "../actions/EventActions";

const initialState = {
  events: [],
};

export interface ActionInterface {
  type: string;
  payload: any;
}

const eventReducer = (state = initialState, action: ActionInterface) => {
  switch (action.type) {
      case CREATE_EVENT:
          const newEventArray = [...state.events, action.payload];
          return { ...state, events: newEventArray }
      case FETCH_EVENTS:
        console.log("Fetch events reducer", action.payload)
          return {...state, events: action.payload}
      default:
          return state; //does not do anything yet​   
  }
};

export default eventReducer;