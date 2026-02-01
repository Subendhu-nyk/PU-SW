// This function is used to create a Redux store. It simplifies setting up Redux by automatically configuring good default settings, including: redux-thunk middleware for async operations.Enables Redux DevTools (in development mode). Applies best practices for reducers and middleware.
// 'configureStore' is a utility from Redux Toolkit that standardizes the store creation process.
import { configureStore } from '@reduxjs/toolkit';

// persistStore- is used to persist (save) the Redux store’s state in local storage (or another storage like session storage).Without persistStore, Redux loses all its state when the page refreshes.
// We import 'persistStore', which is a function that creates a 'persistor' object for a given store.
import { persistStore } from 'redux-persist';

// This import brings in the root reducer that has already been configured for persistence.It is not a simple reducer; it is wrapped with persistReducer, which enables Redux Persist.
// We are importing the default export from the 'rootReducer.ts' file and naming it 'persistedReducer'.
import persistedReducer from './rootReducer';


// We create the store instance using 'configureStore'.
// 'const store' holds the Redux store object, which includes methods like dispatch, getState, and subscribe.
const store = configureStore({
    // We pass the 'persistedReducer' as the main 'reducer' for the store.
    // This defines how the state changes in response to actions.
    reducer: persistedReducer, // Use the persisted reducer

    // Add additional middleware if necessary
    // 'middleware' is a function that allows us to customizing the middleware chain.
    // middleware: (getDefaultMiddleware) => ... is an arrow function that receives the default middleware list.
    middleware: getDefaultMiddleware =>
        // We call 'getDefaultMiddleware' to get the standard Redux Toolkit middleware (including Thunk).
        // We pass a configuration object to it to customize behavior.
        getDefaultMiddleware({
            // serializableCheck: ... is used to configure the SerializableStateInvariantMiddleware.
            // Redux usually warns if you put non-serializable data (like functions or Promises) in state or actions.
            serializableCheck: {
                // ignoredActions: We tell Redux to ignore serializability checks for specific action types.
                // 'persist/PERSIST' is an internal action dispatched by redux-persist that is often non-serializable.
                ignoredActions: ['persist/PERSIST'], // Ignore PERSIST action

                // ignoredPaths: We tell Redux to ignore checks for specific paths in the state tree.
                // 'register' might be a path where non-serializable data is stored temporarily.
                ignoredPaths: ['register'], // Ignore the 'register' path in state
            },
        }),
});

// Create the persistor instance
// We call 'persistStore' with our created 'store'.
// 'persistor' is an object that controls the persistence process (e.g., pausing, purging, or flushing storage).
// It is used by the <PersistGate> component (usually in index.tsx/main.tsx) to delay rendering until state is rehydrated.
const persistor = persistStore(store);

// TYPE DEFINITIONS FOR USE IN COMPONENTS
// These types help TypeScript understand the shape of our store and the actions we can dispatch.

// RootState: Represents the entire state tree of our application.
// 'ReturnType<typeof store.getState>' automatically infers the state structure based on the reducers we passed to configureStore.
// When you use 'useSelector((state: RootState) => state.theme)', TypeScript will know exactly what properties 'state' has.
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch: Represents the dispatch function of our store.
// 'typeof store.dispatch' ensures that the dispatch function knows about Thunks and other middleware.
// When you use 'useDispatch<AppDispatch>()', it allows you to dispatch asynchronous thunks correctly without type errors.
export type AppDispatch = typeof store.dispatch;

// Export both store and persistor
// We use a named export statement to export 'store' and 'persistor'.
// This allows other parts of the application to import them using { store, persistor } from './store'.
export { store, persistor }; // Export both store and persistor

