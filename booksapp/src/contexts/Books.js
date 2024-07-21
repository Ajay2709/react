import { createContext, useCallback, useState } from "react";
import axios from "axios";

/**
 * Context - used to share props between components that do not have a parent-child relationship.
 * Provider - Component used to specify what data we want to share.
 * Consumer - Component used to get access to data.
 * value - Data that is shared between components.
 */

const Books = createContext();

function Provider({children}) {
     const [books, setBooks] = useState([]);

     // const getBooks = async () => {
     //      const response =  await  axios.get('http://localhost:3001/books')
     //      setBooks(response.data);
     // }

     /** useCallback
      * Affects the behaviour after the first render
      * [] as second param - Gives back the original 'getBooks' from first render
      * [values] as second param - Gives the new version of 'getBooks'
      */
     const getBooks = useCallback( async () => {
          const response =  await  axios.get('http://localhost:3001/books')
          setBooks(response.data);
     }, []);

     const createBook = async (title) => {
          const response = await axios.post('http://localhost:3001/books', { title })
          console.log("added Book:"+response.data);
          setBooks([...books, response.data]);
     }

     const updateBookById = async (id, newTitle) => {
          const response = await axios.put(`http://localhost:3001/books/${id}`, {
               title: newTitle
          })
          console.log("updatedBook: ",response.data);
          getBooks();
     }

     const deleteBook = async (id) => {
          console.log("deleteBook called for: "+id)
          axios.delete(`http://localhost:3001/books/${id}`);
          getBooks();
     }

     const contextData = {
          books,
          getBooks,
          createBook,
          updateBookById,
          deleteBook
     }; 

     return (
          <Books.Provider value={contextData} >
               {children}
          </Books.Provider>
     )
}

export {Provider};
export default Books;

//import BooksContext, {Provider} from './contexts/Books' 