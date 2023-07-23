import "./App.css";

import { useCatFact } from "./hooks/useCatFact";

function App() {
  const { fact, refreshFact } = useCatFact();

  const handleClick = () => {
    refreshFact();
  };

  return (
    <div>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Buscar</button>
      {fact && <p>{fact}</p>}
    </div>
  );
}

export default App;
