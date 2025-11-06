import { useState } from "react";
import Login from "./components/Login";
import Carta from "./components/Carta";
import "./App.css";

function App() {
  const [acceso, setAcceso] = useState(false);

  return (
    <div className="App">
      {acceso ? <Carta /> : <Login onSuccess={() => setAcceso(true)} />}
    </div>
  );
}

export default App;
