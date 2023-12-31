/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const FormData = ({books, setBooks}) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [isbn, setIsbn] = useState("");
    const [pubYear, setPubYear] = useState("");
  
    // console.log(title)
    // console.log(author)
    // console.log(isbn)
    // console.log(pubYear)
  const clearInputs = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
    setPubYear("");
  }
    // form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    //Creating book object
    const book = {
      title,
      author,
      isbn,
      pubYear
    }
    setBooks([...books, book]);
    clearInputs();
   
  }
  useEffect(()=>{
    console.log(books)
  }, [books])
  
  return (
    <form 
          onSubmit = {handleSubmit}
          className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>

            <label>Author</label>
            <input
              type="text"
              value={author}
              onChange={(e)=> setAuthor(e.target.value)}

              className="form-control"
              required
            ></input>
            <br></br>

            <label>ISBN#</label>
            <input
              type="text"
              value={isbn}
              onChange={(e)=> setIsbn(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>

            <label>Published Year</label>
            <input
              type="text"
              value={pubYear}
              onChange = {(e) => setPubYear(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>

            <button type="submit" className="btn btn-success btn-md">
              ADD
            </button>
          </form>
  )
}

export default FormData