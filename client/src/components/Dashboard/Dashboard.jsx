import { useContext  } from 'react';
import './dashboard.css'
const Dashboard = ({ openModal, openDetail, fileteredBooks, filterArray}) => {
    console.log('fileteredBooks');
    console.log(fileteredBooks);
    const showModal = (book) => {
        openModal(book);
    }
    const showDetail = (book) => {
        openDetail(book);
    }
    const handleSearch = (e) =>{
        filterArray(e);
    }
    return (
        <div className='dashboardPage'>
            <div className="dashBoardHeader">
                <input type='search' placeholder='Cerca Libro' onChange={handleSearch} />
                <button onClick={() => showModal({})}>
                    Aggiungi
                </button>
            </div>
            <div className="dashBoardContent">


                {
                    fileteredBooks.map(book => (

                        <article key={book._id} onClick={() => showDetail(book)}>
                            {
                                <p > {book.title} </p>

                            }
                        </article>
                    ))
                }

            </div>
        </div>
    )
}
export default Dashboard;