// combineReducers from Redux: Helps combine multiple reducers into one main reducer.
// 'import' statement is used to bring in specific functions or objects from other files or libraries.
// Here we import 'combineReducers' from the 'redux' library.
import { combineReducers } from 'redux';

// persistReducer and storage from Redux-Persist: Helps save part of the Redux store in localStorage, so data is not lost when the page refreshes.
// We import 'persistReducer' which is a function that returns a reducer with persistence capabilities.
import { persistReducer } from 'redux-persist'; // Import persistReducer

// We import the default storage engine which uses the browser's localStorage.
// 'storage' here is just a variable name for the default export from 'redux-persist/lib/storage'.
import storage from 'redux-persist/lib/storage'; // LocalStorage as the storage mechanism

// Import individual reducers (from slices)
// These imports are currently commented out, but they would normally import the reducer functions exported from your slice files.
// import ThemeReducer from '../features/ThemeReducer/themeSlice.js';
// import DashboardReducer from '../features/DashboardSlice/DashboardSlice';
// import TokenReducer from '../features/SystemConfigurationReducers/TokenReducer/tokenSlice';

// Redux Persist Configurations for individual reducers
// Specifies how Redux state should be stored persistently.
// We define a constant named 'persistConfig' to hold the configuration object for redux-persist.
// 'const' declares a variable that cannot be reassigned.
// TYPE SAFETY: We can add ': any' or specific interfaces here if we had the redux-persist types fully available,
// but usually TypeScript infers this well. A strict type would be 'PersistConfig<any>'.
const persistConfig = {
  // key: 'root' → The key under which the persisted state will be stored in localStorage.
  // This means all your Redux data will be saved under the key "persist:root".
  key: 'root', // Key for the persisted data

  // storage → Uses localStorage to save data.
  // This property tells redux-persist which storage engine to use (imported above).
  storage, // This tells redux-persist to use localStorage

  // whitelist: ['theme', 'systemId'] → Only theme and systemId state will be saved.
  // The 'whitelist' array defines which parts of the state (slices) should be persisted.
  // Any reducer key NOT in this list will NOT be saved to local storage.
  whitelist: ['theme', 'systemId'], // Only persist 'theme' and 'systemId' reducers
};

// Combine multiple reducers 
// We create the 'rootReducer' by calling 'combineReducers'.
// This function takes an object where the keys are the state property names and the values are the corresponding reducers.
const rootReducer = combineReducers({
  // These lines are commented out, but this is where you map state keys to reducers.
  // e.g., 'theme: ThemeReducer' would mean state.theme is managed by ThemeReducer.
  //   theme: ThemeReducer,
  //   dashboard: DashboardReducer,
  //   token: TokenReducer,
});

// It ensures the selected data remains stored even after a page refresh.
// We wrap our 'rootReducer' with 'persistReducer', passing in the configuration and the root reducer.
// 'persistedReducer' is a new reducer that handles rehydration of state from storage.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// We export 'persistedReducer' as the default export of this module.
// This allows other files (like store.ts) to import it using 'import name from "./rootReducer"'.
export default persistedReducer;
