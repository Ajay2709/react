import { createContext, useEffect, useState } from "react";

const Navigation = createContext();

function NavigationProvider({children}){

    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);
        
        //cleanup function
        return () => {
            window.removeEventListener('popstate', handler);
        }
    }, []);

    const navigate = (to) => {
        window.history.pushState({},'', to);
        setCurrentPath(to);
    }



    return (
    <Navigation.Provider value={{ currentPath, navigate }}>
        {children}
    </Navigation.Provider> );
}

export { NavigationProvider };
export default Navigation;