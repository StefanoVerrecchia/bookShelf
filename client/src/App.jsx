import { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './components/Book';
import Form from './components/Form';

const App = () => {
  const [books, setBooks] = useState([]);
//GET
  useEffect(() => {
    console.log('effect');
    axios.get('http://localhost:8000/v1/books')
      .then(response => {
        console.log('promise fulfilled')
        const books = response.data;
        setBooks(books.data);
      })
  }, []);
//POST
  const addBook = (newBook) => {
    axios.post('http://localhost:8000/v1/books', newBook)
      .then(response => {
        console.log(response);
        const newbooks = response.data;
        setBooks(prevState => [...prevState, newbooks.data])
      })
      .catch(error => {
        console.error('Error adding book:', error);
      });
  }

  
  console.log(books.length);
  return (
    <>
      <Form addBook={addBook} />
      {
        books.map((book) => (
          <Book key={book._id} data={book} />
        ))
      }
    </>
  )
}
export default App