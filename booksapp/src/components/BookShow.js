import { useState, useRef } from "react";
import useBooksContext from "../hooks/books-context-hook.js";
import BookEdit from './BookEdit';

function BookShow ({book}){
    const [showEdit, setEdit] = useState(false);

    /** useRef() Hook
     * Used to get a reference for a specific DOM element
     * Returns an object with a 'current' property, that refers to that sepcific DOM element.
     * Useful when using multiple instances of same components with event handlers, like a <li> or <button>
     */
    const bookEle = useRef();
    
    const {deleteBook} = useBooksContext();

    const handleLIClick = (event) => {
        console.log("clicked on: ", bookEle);
    }
    
    const handleEditClick = () => {
        setEdit(!showEdit);
    }
    const handleDeleteClick = () => {
        deleteBook(book.id);
    }
    const handleUpdate = () => {
        setEdit(!showEdit);
    }
    return (
    <li ref={bookEle} className="book-show" onClick={handleLIClick}>
        { //ternary operator
            showEdit ? <BookEdit book={book} onEdit={handleUpdate}/> 
            : <h3>{book.title}</h3> 
        }
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>x</button>
            <button className="delete" onClick={handleDeleteClick}>x</button>
        </div>
        
    </li> )
}

export default BookShow;