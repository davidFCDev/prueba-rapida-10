import { useState } from "react";
import "./App.css";

const RANDOM_FACT_URL = "https://catfact.ninja/facts";

function App() {
  const { fact, setFact } = useState();

  const getFact = () => {
    fetch(RANDOM_FACT_URL)
      .then((res) => res.json())
      .then((response) => {
        const { fact } = response;
        setFact(fact);
      });
  };

  return (
    <div>
      <h1>App de gatitos</h1>
      <button onClick={getFact}>Buscar</button>
      {fact && <p>{fact}</p>}
    </div>
  );
}

export default App;
