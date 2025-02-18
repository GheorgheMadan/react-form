import { useState } from "react";

const prodotti = [
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
    // const [tasks, setTasks] = useState(prodotti)
    // // stato dell'input di inserimento nuovo task
    // const [newTask, setNewTask] = useState('');

    return (
        <>
            <h1>LISTA PRODOTTI</h1>
            {prodotti.map((prodotto, index) => {
                return <ul>
                    <li>{prodotto}</li>
                </ul>
            })}
        </>
    )
}