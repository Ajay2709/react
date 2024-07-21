import useBooksContext from "../hooks/books-context-hook.js";
import BookShow from './BookShow';

function BookList (){

    const {books} = useBooksContext();
    
    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book}/>
    })

    return (
    <ul className="book-list">
        {renderedBooks}
    </ul> )
}

export default BookList;