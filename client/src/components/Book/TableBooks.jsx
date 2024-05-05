import './tableBooks.css'






const TableBooks = ({ openModal, listBooks , deleteBook}) => {
    if (!listBooks || listBooks.length === 0) {
        return <div>Nessun libro disponibile.</div>;
    }

    const keys = Object.keys(listBooks[0]);
    const showModal = (book) => {
        openModal(book);
    }

    const buildHeadTable = (keys) => {
        return (
            <tr>
                {keys.map(key => <th key={key}>{key}</th>)}
            </tr>
        );
    };

    const buildBodyTable = (data, keys) => {
        return data.map((rowData, index) => (
            <tr key={index}>
                {keys.map(key => <td key={key}>{rowData[key]}</td>)}
                <td><button onClick={() => showModal(rowData)}>Modifica</button></td>
                <td><button onClick={() => deleteBook(rowData)}>Elimina</button></td>
            </tr>
        ));
    };

    return (
        <>
            <button onClick={() =>  showModal({})}>
                Aggiungi
            </button>
            <div className="table-container">
                <table>
                    <thead className="table-header">
                        {buildHeadTable(keys)}
                    </thead>
                    <tbody>
                        {buildBodyTable(listBooks, keys)}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TableBooks;
