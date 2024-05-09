import { useState } from 'react';
import './form.css'
const Form = ({ book, setBook, addBook }) => {

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        console.log(name);
        console.log(value);
        setBook(prevState => ({
            ...prevState,
            [name]: value
        }))
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
            addBook(book);
    }
    return (
        <>
            {
                <div id='form' className='form'>

                    <form onSubmit={handleFormSubmit}>
                        <div className='modal'>

                            <table className='formTable'>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label htmlFor="title">Title:</label>
                                            <input type="text" id="title" name="title"  onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="title">Author:</label>
                                            <input type="text" id="author" name="author"  onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="title">Publication date:</label>
                                            <input type="text" id="publicationDate" name="publicationDate"  onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            
                                                    <button type="submit">Aggiungi</button>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <span className='close' onClick={() => document.getElementById("form").style.display = "none"} >&times;</span>
                        </div>
                    </form>
                </div>}
        </>


    )
}
export default Form;