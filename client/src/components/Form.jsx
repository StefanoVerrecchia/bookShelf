import { useState } from 'react';
const Form = ({addBook}) => {
    const [newBook, setNewBook] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        console.log(name);
        console.log(value);
        setNewBook(prevState => ({
            ...prevState,
            [name]: value
        }))
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(newBook);
        addBook(newBook);
    }
    return (
        <>
            {
                <div>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <input type="text" id="title" name="title" value={newBook.title} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="title">Author:</label>
                            <input type="text" id="author" name="author" value={newBook.author} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="title">Publication date:</label>
                            <input type="text" id="publicationDate" name="publicationDate" value={newBook.publicationDate} onChange={handleChange} />
                        </div>
                        <button type="submit">Aggiungi</button>
                    </form>
                </div>}
        </>


    )
}
export default Form;