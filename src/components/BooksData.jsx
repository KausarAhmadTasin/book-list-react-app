/* eslint-disable react/prop-types */

import BookRaw from "./BookRaw"


const BooksData = ({books, setBooks}) => {
    // delete book from LS
const deleteBook = (isbn) => {
    const filteredBooks = books.filter((book) => book.isbn !== isbn);
    setBooks(filteredBooks);
  }
  return (
    <>
        {
        books.length > 0 && (
          <>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ISBN#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Published Year</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                books.map(book=> <BookRaw key={book.isbn}  book={book} deleteBook = {deleteBook}/>)
              }
            </tbody>
          </table>
        </div>
        <button onClick={()=> setBooks([])} className="btn btn-danger btn-md">Remove All</button>
      </>
        )
      }
      {
        books.length < 1 && <div>No book added!</div>
      }
    </>
  )
}

export default BooksData