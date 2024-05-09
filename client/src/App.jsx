import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import Dashboard from './components/Dashboard/Dashboard';
import Detail from './components/Detail/Detail';
import LoginForm from './components/LoginForm/LoginForm';

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

const App = () => {
  const [listBooks, setlistBooks] = useState([]);
  const [fileteredBooks, setfileteredBooks] = useState([]);
  const [selectedBook, setBook] = useState({});
  const [isEdit, setIsEdit] = useState(true);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleLogin = async () => {
    await axios.post('http://localhost:8000/v1/login', { username, password })
      .then(response => {
        console.log('login');
        console.log(response.data);
        const user = response.data;
        window.localStorage.setItem('loggedUser', JSON.stringify(user));
        setUser(user);
        setUsername('');
        setPassword('');
      })
      .catch(error => {

      })
  }
  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedUser');
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      setUser(user);
    }
  }, []);
  //GET
  useEffect(() => {
    console.log('effect');
    axios.get('http://localhost:8000/v1/books')
      .then(response => {
        console.log('promise fulfilled')
        const books = response.data;
        setlistBooks(books.data);
        setfileteredBooks(books.data);
      })
      .catch(error => {
        console.log('error getting');
        console.log(error);
      })
  }, []);
  //POST
  const addBook = (newBook) => {
    axios.post('http://localhost:8000/v1/books', newBook, { headers: { Authorization: user.token } })
      .then(response => {
        console.log(response);
        const newbooks = response.data;
        setlistBooks(prevState => [...prevState, newbooks.data])
        setfileteredBooks(prevState => [...prevState, newbooks.data])
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
        listBooks.forEach(prevBook => {
          if (prevBook._id === book._id) {
            console.log('dentro');
            prevBook = book;
          }
          updatedList.push(prevBook);
        });
        console.log('updatedList');
        console.log(updatedList);
        setlistBooks(updatedList);
        setfileteredBooks(updatedList);
        setIsEdit(true);
        document.getElementById('detailBookId').style.display = 'none'
      })
      .catch(error => {
        console.error('Error editing book:', error);
      })
  }
  //DELETE
  const deleteBook = (book) => {
    console.log('delete');
    console.log(book);
    axios.delete(`http://localhost:8000/v1/books/${book._id}`)
      .then(response => {
        console.log(response.data);
        setlistBooks(listBooks.filter(item => item._id !== book._id));
        setfileteredBooks(listBooks.filter(item => item._id !== book._id));
        document.getElementById('detailBookId').style.display = 'none'
      })
      .catch(error => {
        console.error('Error editing book:', error);
      })
  }


  const openModal = (book) => {
    console.log('open modal');
    document.getElementById('form').style.display = 'block'
  }

  const openDetail = (book) => {
    console.log('open showDetail');
    console.log(book);
    setBook(book);
    document.getElementById('detailBookId').style.display = 'flex'
  }

  const filterArray = (e) => {
    console.log('search');
    e.preventDefault();
    const value = e.currentTarget.value.trim();
    if (value.length > 0) {
      console.log('>0');
      const serachArray = listBooks.filter(book => {
        return book.title.toLowerCase().includes(value.toLowerCase());
      });
      console.log(serachArray);
      setfileteredBooks(serachArray);
    } else {
      console.log('<0');
      setfileteredBooks(listBooks);
    }
  }

const enableEdit = () =>{
  console.log('enable edit');
  console.log('isEdit --->' , isEdit);
  setIsEdit(false);

}

  console.log(listBooks.length);
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: '#4E5F75'
  };



  return (

    <>
      {user ?
        (<Router>
          <div className="dashboard">
            <div className="dashboardSideMenu">
              <p><Link style={linkStyle} to="/">HOME</Link></p>
              <p><Link  style={linkStyle}to="/book">BOOK</Link></p>
            </div>
            <Routes>
              <Route path="/book" element={<Dashboard openModal={openModal} openDetail={openDetail} fileteredBooks={fileteredBooks} filterArray={filterArray} />} />
            </Routes></div>
        </Router>):
        (<LoginForm username={username} password={password} setUsername={setUsername} setPassword={setPassword} doLogin={handleLogin} />)}

      <Form book={selectedBook} setBook={setBook} addBook={addBook}  editBook={editBook} />
      <Detail book={selectedBook} setBook={setBook} editBook={editBook} deleteBook={deleteBook} isEdit ={isEdit} enableEdit={enableEdit}/>
    </>

  )
}
export default App