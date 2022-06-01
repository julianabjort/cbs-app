export const CREATE_EVENT = 'CREATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const FETCH_EVENTS = 'FETCH_EVENTS';
import { Event } from "../../entities/Event";

export const fetchEvents = () => {
  return async (dispatch: any, getState: any) => {
    const idToken = getState().user.idToken
    const response = await fetch('https://cbs-webdev-default-rtdb.europe-west1.firebasedatabase.app/events.json?auth='
    + idToken, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (!response.ok) {
      console.log("Not fetching new events")
    } else {
      let events = [];
      for (const key in data) {
        let event = new Event('', data[key].eventTitle, data[key].eventSubTitle, data[key].eventTime, data[key].eventLocation, key)
        events.push(event)
      }
      events.reverse()
      dispatch({type: FETCH_EVENTS, payload: events})
    }
  };
}

export const createEvent = (eventTitle: string, eventSubTitle: string, eventTime: string, eventLocation: string) => {
  return async (dispatch: any, getState: any) => {
    const idToken = getState().user.idToken
    const response = await fetch('https://cbs-webdev-default-rtdb.europe-west1.firebasedatabase.app/events.json?auth='
    + idToken, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eventTitle,
        eventSubTitle,
        eventTime,
        eventLocation
      })
    });
    const data = await response.json();
    console.log("create event action", data)

    if (!response.ok) {
      console.log("Error")
    } else {
      const event = new Event('', eventTitle, eventSubTitle, eventTime, eventLocation, data.name);
      dispatch({type: CREATE_EVENT, payload: event})
    };
  };
};