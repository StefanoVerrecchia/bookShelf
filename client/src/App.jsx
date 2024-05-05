import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import TableBooks from './components/Book/TableBooks';

const App = () => {
  const [listBooks, setlistBooks] = useState([]);
  const [selectedBook, setBook] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  //GET
  useEffect(() => {
    console.log('effect');
    axios.get('http://localhost:8000/v1/books')
      .then(response => {
        console.log('promise fulfilled')
        const books = response.data;
        setlistBooks(books.data);
      })
      .catch(error =>{
        console.log('error getting');
        console.log(error);
      })
  }, []);
  //POST
  const addBook = (newBook) => {
    axios.post('http://localhost:8000/v1/books', newBook)
      .then(response => {
        console.log(response);
        const newbooks = response.data;
        setlistBooks(prevState => [...prevState, newbooks.data])
        document.getElementById('form').style.display = 'none';
      })
      .catch(error => {
        console.error('Error adding book:', error);
      });
  }
  //PUT
  const editBook = (book) => {
    console.log('edit');
    console.log(book);
    axios.put(`http://localhost:8000/v1/books/${book._id}`, book)
    .then(response => {
      console.log(response.data);
      const updatedList = [];
      listBooks.forEach(prevBook =>{
        if(prevBook._id === book._id){
          console.log('dentro');
          prevBook = book;
        }
        updatedList.push(prevBook);
      });
      console.log('updatedList');
      console.log(updatedList);
      setlistBooks(updatedList);
      setIsEdit(false);
      document.getElementById('form').style.display = 'none'
    })
    .catch(error =>{
      console.error('Error editing book:', error);
    })
  }
//DELETE
const deleteBook = (book) =>{
  console.log('delete');
  console.log(book);
  axios.delete(`http://localhost:8000/v1/books/${book._id}`)
  .then(response =>{
    console.log(response.data);
      setlistBooks(listBooks.filter(item => item._id !== book._id));
  })
  .catch(error =>{
    console.error('Error editing book:', error);
  })
}


  const openModal = (book) => {
    console.log('open modal');
    console.log(book);
    setBook(book);
    if(Object.keys(book).length === 0){
      setIsEdit(false)
    }else{
      setIsEdit(true)
    }
    
    document.getElementById('form').style.display = 'block'
  }


  console.log('isEdit');
  console.log(isEdit);
  console.log(listBooks.length);
  return (

    <div >
      <Form book = {selectedBook} setBook ={setBook} addBook={addBook} isEdit = {isEdit} editBook = {editBook}/>
      <TableBooks openModal={openModal} listBooks={listBooks} deleteBook={deleteBook}/>
    </div>
  )
}
export default App