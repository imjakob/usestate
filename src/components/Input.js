import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";

import "./styles.scss";

function Input() {
  const [word, addNewWord] = useState([
    "Un garcon mexicain",
    "Un homme americain",
    "Alice est Francaise",
    "Alice parle Francais",
    "Un fille mexicaine",
    "Je parle Francais",
    "Paul est Francais",
    "Je m'appelle Mathieu",
    "Elle est Francaise",
    "Une fille Francaise",
    "Il s'appelle Paul",
    "Tu parles Anglais?",
    "Excuse-moi, Comment tu t'appelles ?",
    "Il est Espagnol",
    "Tu es Espagnol",
    "Alice est americaine",
    "Tu es Francais?",
    "Je parle Francais et anglais",
    "J'habite en Angleterre",
    "Je travaille en Angleterre",
    "J'habite en Europe",
    "En Espagne",
    "Je travaille avec Duo",
    "Tu etudies en Angleterre?",
    "Tu etudies a Paris",
    "Non",
    "Elle habite ici",
    "Il travaille beaucoup",
    "Marie est journaliste",
    "Tu es professor",
    "Il est professor",
    "Une universite",
    "J'habite en France",
    "Tu habites a Berlin?",
    "J'etudie en Allemand",
    "J'etudie a NewYork, et toi?",
    "Oui, j'habite a Paris",
    "Une etudiante",
    "Elle est etudiante",
    "Paul est en Angleterre",
    "J'habite en Espagne",
    "avec toi",
    "Je vais a la gare",
    "Un restaurant",
    "Une gare",
    "Je vais a Paris",
    "le mexique",
    "Je vais a l'aeroport",
    "L'avion",
    "Un hotel Francais",
    "Tu vas a NewYork",
    "Un avion",
    "La banque",
    "L'ecole",
    "Nous sommes a la banque",
    "Je veux un livre",
    "Nous allons a l'hotel",
    "Nous sommes ici",
    "La boulangerie",
    "Le parc",
    "Tu prends le metro",
    "Tu vas au travail?",
    "Un parc a Paris",
    "Marie etudie a NewYork",
    "En italie",
    "Une universite americaine",
    "Je suis professor",
    "Tu travailles ici?",
    "Elle etudie beaucoup",
    "Julia travaille en Paris"
  ]);
  const [inputValue, setNewInputValue] = useState("");

  const handleChangeInput = e => {
    const { value } = e.target;

    setNewInputValue(value);
  };

  const handleAddWord = () => {
    addNewWord(state => [...state, inputValue]);
    setNewInputValue("");
  };

  return (
    <div className="input-language">
      <form>
        <input
          type="text"
          name="word"
          value={inputValue}
          onChange={handleChangeInput}
          placeholder="Your word"
        />
        <button
          className={`button ${inputValue.length === 0 && "disabled"}`}
          type="submit"
          onClick={handleAddWord}
          disabled={inputValue.length === 0}
        >
          ADD
        </button>
      </form>
      <ul className="overscreen">
        {word.map(item => (
          <li key={uuidv1()}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Input;
