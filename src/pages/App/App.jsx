import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import {getBooksFromLocalStorage} from "../../utils/utils"
import FormData from "../../components/formData";
import BooksData from "../../components/booksData";
export const App = () => {
  // main array of objects state || books state || books array of objects
  const [books, setBooks] = useState(getBooksFromLocalStorage());
  // input field states
 


// setting data to the locat storage
useEffect(()=>{
  localStorage.setItem("books", JSON.stringify(books));
},[books]);
  // saving data to local storage

  return (
    <div className="wrapper">
      <h1>BookList App</h1>
      <p>Add and view your books using local storage</p>
      <div className="main">
        <div className="form-container">
          <FormData books = {books} setBooks = {setBooks}/>
        </div>

        <div className="view-container">
          <BooksData books= {books} setBooks = {setBooks}/>
        </div>
      </div>
    </div>
  );
};

export default App;
