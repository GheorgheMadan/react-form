import { useState } from "react";

const articoli = [
    "Giacca in pelle",
    "Sneakers bianche",
    "Occhiali da sole Ray-Ban",
    "Zaino in pelle minimal",
    "Orologio analogico Casio",
    "Cappotto lungo elegante",
    "Felpa oversize",
    "Jeans slim fit",
    "Scarpe da trekking",
    "Cintura in cuoio marrone"
];

// Products.jsx
export default function ArticleList() {
    // stato della lista
    const [article, setArticle] = useState(articoli)
    // stato dell'input di inserimento nuovo articolo
    const [newArticle, setNewArticle] = useState('');

    // funzione di aggiunta di un articolo alla lista
    const addArticle = e => {
        e.preventDefault();
        // creazione nuovo array 
        const updatedArticles = [...article, newArticle];
        setArticle(updatedArticles);

        // Azzero il valore di newArticle 
        setNewArticle('');
    }
    return (
        <>
            {/* <h1>LISTA ARTICOLI</h1>
            {articoli.map((articolo, index) => {
                return <ul>
                    <li>{articolo}</li>
                </ul>
            })} */}
            <form onSubmit={addArticle}>
                <input type="text" value={newArticle}
                    onChange={event => { setNewArticle(event.target.value) }}
                />
                <button>Invia</button>
            </form>
        </>
    )
}