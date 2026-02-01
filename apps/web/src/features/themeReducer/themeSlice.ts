import { createSlice } from '@reduxjs/toolkit';

// ---------------------------------------------------------------------------
// INTERFACE DEFINITION (TypeScript Concept)
// ---------------------------------------------------------------------------
// An 'interface' is a TypeScript structure that defines the shape or contract of an object.
// It acts as a blueprint, ensuring that any object adhering to this interface includes
// specific properties with specific types.
//
// Here, 'ThemeState' explicitly tells TypeScript that our state MUST:
// 1. Be an object.
// 2. Have a property named 'darkMode'.
// 3. Ensure 'darkMode' is of type 'boolean' (true or false).
export interface ThemeState {
    darkMode: boolean; // Type annotation specifically for a boolean value
}

// ---------------------------------------------------------------------------
// INITIAL STATE (with Type Annotation)
// ---------------------------------------------------------------------------
// We declare a constant 'initialState' and assign it the 'ThemeState' type.
// Syntax: 'const variableName: TypeName = value;'
//
// Why use ': ThemeState'?
// - It enforces type safety. If we try to add a property that isn't in 'ThemeState'
//   (like 'color: "red"'), TypeScript will throw an error.
// - It helps with autocomplete in your IDE.
const initialState: ThemeState = {
    darkMode: false, // Default value is false (light mode)
};

// ---------------------------------------------------------------------------
// CREATE SLICE
// ---------------------------------------------------------------------------
// 'createSlice' is a generic function from Redux Toolkit.
// It automatically generates action creators and action types based on the reducers we define.
const themeSlice = createSlice({
    name: 'theme', // A string name to identify this slice (used in action types like 'theme/toggleTheme')

    initialState, // The initial state object we defined above. Redux Toolkit infers the State type from this.

    reducers: {
        // -----------------------------------------------------------------------
        // REDUCER FUNCTION
        // -----------------------------------------------------------------------
        // 'toggleTheme' is a reducer function.
        // TypeScript automatically infers the type of 'state' as 'ThemeState' because
        // we passed 'initialState' (which is of type ThemeState) to createSlice.
        //
        // Using TS here ensures we only access properties that actually exist on 'state'
        // (e.g., 'state.darkMode'). If we typed 'state.lightMode', TS would error.
        toggleTheme: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers (like state.x = y)
            // because it uses a library called Immer internally to handle immutability safely.
            state.darkMode = !state.darkMode;
        },
    },
});

// ---------------------------------------------------------------------------
// EXPORTS
// ---------------------------------------------------------------------------
// Exporting the 'toggleTheme' action creator so plain components can dispatch it.
// When imported, you can use dispatch(toggleTheme()) to trigger the state change.
export const { toggleTheme } = themeSlice.actions;

// Exporting the reducer function itself.
// This will be imported in the store configuration (typically store.ts) and combined with other reducers.
export default themeSlice.reducer;
