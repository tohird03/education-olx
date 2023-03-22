import React, { createContext, useContext, useState } from 'react';

const ContextColor = createContext()

const ThmeContext = ({children}) => {

    const [theme, setTheme] = useState(false)

    return (
        <ContextColor.Provider value={{theme, setTheme}}>
            {children}
        </ContextColor.Provider>
    );
}

export { ThmeContext, ContextColor  };
