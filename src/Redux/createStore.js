import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
// import session from "redux-persist/lib/storage/session";
import { User } from "./authReducer";

const rootReducer = combineReducers({
  user: User,
});

// const persistConfig = {
//   key: "nextjs-app",
//   storage: session,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// persisted
// const store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// not persisted
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { persistor, store };
