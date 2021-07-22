import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
