
import './detail.css'
export default function Detail({ book, setBook, editBook, deleteBook }) {

  const keys = Object.keys(book);
  const hiddenKey = ['_id','__v'];
  const filteredKey = keys.filter(item => !hiddenKey.includes(item));


  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    console.log(name);
    console.log(value);
    setBook(prevState => ({
      ...prevState,
      [name]: value
    }))
  };
  return (
    <div id='detailBookId' className="detailBookContainerOver">
      <div className='detailBook'>
        <div className="detailBookHeader">
          <h2>Dettagli</h2>
          
            <button type="submit" onClick={() => editBook(book)}>Modifica</button>
            <button type="submit" onClick={() => deleteBook(book)}>Elimina</button>
            <span className='close' onClick={() => document.getElementById("detailBookId").style.display = "none"} >&times;</span>

        </div>
        <div className='detailBookBody'>
          <div className='sideInput'>
            {
              filteredKey.map(key => {
                return (

                  <p key={key}><label >{key}</label><input type='text' name={key} value={book[key]} onChange={handleChange} /></p>

                )
              })

            }
          </div>
          <img src='data:image/png;base64,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'></img>

        </div>
      </div>
    </div>
  )
}
