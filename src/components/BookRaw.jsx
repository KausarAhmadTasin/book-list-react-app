/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";

const BookRaw = ({book, deleteBook}) => {
    const {title, author, isbn, pubYear}= book;

   
  return (
    <tr>
        <td>{isbn}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>{pubYear}</td>
        <td onClick={() => deleteBook(isbn)} className="delete-btn">
            <MdDelete color="red"/>
        </td>
    </tr>
  )
}

export default BookRaw