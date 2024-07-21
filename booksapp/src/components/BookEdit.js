import { useState } from "react";
import useBooksContext from "../hooks/books-context-hook.js";

function BookEdit ({book, onEdit}){  

    const {updateBookById} = useBooksContext();

    const [newTitle, setNewTitle] = useState(book.title);

    const handleChange = (event) => {
        setNewTitle(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onEdit();
        updateBookById(book.id, newTitle);   
    }
    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <input className='input' value={newTitle} onChange={handleChange}/>
            <button className='button'>Update</button>
        </form>
    )
}

export default BookEdit;