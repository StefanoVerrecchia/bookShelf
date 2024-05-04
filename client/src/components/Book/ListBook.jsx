import { useState } from 'react';
import './book.css';
const ListBook = ({ openModal, listBooks }) => {
    console.log(listBooks);
    const showModal = (book) =>{
        openModal(book);
    }
    return (
        <>
        <button onClick={showModal}>
            Mostra Modale
        </button>
            <div className='content'>
                {
                    listBooks.map((book) => (
                        <article key={book._id}>
                            <ul >
                                {
                                    Object.keys(book).map((key) => {
                                        return (<li key={key}>{key} : {book[key]}</li>)
                                    })

                                }
                                <button onClick={() => showModal(book)}>Modifica</button>

                            </ul>
                        </article>
                    ))
                }
            </div>
        </>
    )
}
export default ListBook