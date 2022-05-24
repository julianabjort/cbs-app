import { createStore, combineReducers, applyMiddleware } from 'redux';
import chatReducer from './store/reducers/ChatReducer';
import { Provider } from 'react-redux';
import userReducer from "./store/reducers/UserReducer";
import NavigationComponent from './components/Navigation';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer
})
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {

  return (
    <Provider store={store}>
      <NavigationComponent />
    </Provider>
  )
}