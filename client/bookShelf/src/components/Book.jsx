const Book = ({ data }) => {
    console.log(data);
    return (
        <>
            <article style={{ border: '1px solid black', margin: '5px' }}>
                <ul key={data._id}>
                    {
                        Object.keys(data).map((el) => {
                            return (<li key={el}>{el} : {data[el]}</li>)
                        })
                        
                    }
                    <button>Modifica</button>
                </ul>
            </article>
        </>
    )
}
export default Book