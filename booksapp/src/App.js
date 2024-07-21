//Improve version of the booksapp with Contexts and Custom Hooks
import { useEffect, useContext } from "react";
import Books from './contexts/Books';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './App.css';


function App() {

  const {getBooks} = useContext(Books);

  /** Second param of useEffect: 
  * Not passed - useEffect's function called after every re-render
  * [] - Never called after first render
  * [books] - Called after re-renders if books state variable is changed
  * Refer codepen.io/sgrider/pen/BarEowz
  * Declaring a function inside the useEffect causes a "Stale Variable Reference" issue.
  */
  useEffect(() => {
    getBooks();
    const cleanUp = () => {
      console.log("cleaning up!");
    }
    return cleanUp;
  }, [getBooks]);

  return <div>
    <BookCreate />
    <BookList />
  </div>
}

export default App;

