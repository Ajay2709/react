import { useContext } from "react";
import Navigation from "../contexts/Navigation";

function useNavContext(){
    return useContext(Navigation);
}

export default useNavContext;
