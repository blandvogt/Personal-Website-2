import React, {useReducer, createContext} from 'react';

const GlobalContext = ({ children }) => {
    const reducer = state => {
        return { darkMode: !state.darkMode };
    };
    const [state, dispatch] = useReducer(reducer, {darkMode: false});

    return (
        <GlobalState.Provider value={state}>
            <GlobalDispatch.Provider value={dispatch}>
                <div>{children}</div>
            </GlobalDispatch.Provider>
        </GlobalState.Provider>
    )
}

export const GlobalState = createContext();
export const GlobalDispatch = createContext();
export default GlobalContext;