//This is a custom hook

import { useContext } from "react";
import Books from '../contexts/Books';

function useBooksContext(){
    return useContext(Books);
}

export default useBooksContext;