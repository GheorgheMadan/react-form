import { useState } from "react";

// creo un array che contiene la lista di articoli che sarà lo stato iniziale
const articlesList = [
    "Giacca in pelle",
    "Sneakers bianche",
    "Occhiali da sole Ray-Ban",
    "Zaino in pelle minimal",
];

// componente Products.jsx
export default function ArticleList() {

    // imposto lo stato della lista attuale
    const [articles, setArticles] = useState(articlesList)
    // imposto lo stato dell'input di inserimento di un nuovo articolo
    const [newArticle, setNewArticle] = useState('');

    // funzione che aggiuge un nuovo articolo alla lista
    const addArticle = e => {

        // Impedisco il comportamento predefinito del form (che ricaricherebbe la pagina)
        e.preventDefault();

        // Creo una nuova lista copiando quella esistente e aggiungendo il nuovo articolo
        const updatedArticles = [...articles, newArticle];
        //  Aggiorno lo stato articles con la nuova lista che contiene il nuovo articolo.
        setArticles(updatedArticles);

        // Azzero il valore dell'input, in modo che dopo l'invio del form l'input risulti vuoto.
        setNewArticle('');
    }
    // Funzione che viene chiamata quando si clicca il bottone "elimina" accanto ad un articolo nella lista.
    const removeArticle = i => {

        // uso il metodo filter per creare un nuovo array senza l'articolo che ha l'indice 'i', article è importante perchè filter si aspetta due parametri
        const updatedArticles = articles.filter((article, index) => {
            // La condizione verifica che l'indice dell'articolo corrente (index) sia diverso da 'i'
            // Se index è diverso da i, l'articolo viene mantenuto nel nuovo array.
            // Se index è uguale a i, l'articolo NON verrà incluso nel nuovo array.
            return index !== i
        })
        // Aggiorno lo stato con la lista senza l'articolo rimosso.
        setArticles(updatedArticles);
    }

    return (
        <>

            <div>
                <h1>Inserisci un nuovo articolo</h1>
                {/* Quando il form viene inviato, la funzione addArticle viene chiamata per aggiungere un nuovo articolo */}
                <form onSubmit={addArticle}>
                    {/* Ogni volta che l'utente digita qualcosa, l'evento onChange viene chiamato e aggiorna lo stato newArticle con il valore dell'input */}
                    <input type="text" value={newArticle}
                        onChange={event => { setNewArticle(event.target.value) }}
                    />
                    {/* Quando l'utente clicca sul bottone, il form viene inviato, chiamando la funzione addArticle per aggiungere il nuovo articolo alla lista */}
                    <button>AGGIUNGI</button>
                </form>
            </div>
            {/*  verifica la lunghezza della lista articles, se la lista è vuota, viene mostrato il messaggio "La tua lista è vuota" */}
            {articles.length === 0 ?
                <h2>La tua lista è vuota</h2>
                :
                <ul>
                    {/* Se la lista non è vuota, allora viene eseguito questo codice */}
                    {articles.map((article, i) => (
                        <li key={i}>
                            {article}
                            {/* Ogni bottone "elimina" ha un evento onClick che chiama la funzione removeArticle(i) quando l'utente clicca sul bottone. */}
                            <button onClick={() => removeArticle(i)}>
                                elimina
                            </button>
                        </li>
                    ))}
                </ul>
            }


        </>
    )
}