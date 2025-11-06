import { useState } from "react";

function Login({ onSuccess }) {
  const [nombre, setNombre] = useState("");
  const [anio, setAnio] = useState("");
  const [extra, setExtra] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.trim().toLowerCase() === "adela" &&
      anio.trim() === "2018" &&
      extra.trim().toLowerCase().includes("america")
    ) {
      setError(false);
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>💘 Ingreso válido para el amor de mi vida 💘</h1>
        <form onSubmit={handleSubmit}>
          <label>Primer Nombre</label>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} />

          <label>¿En qué año nos conocimos?</label>
          <input value={anio} onChange={(e) => setAnio(e.target.value)} />

          <label>¿Qué chingue a su madre el...?</label>
          <input value={extra} onChange={(e) => setExtra(e.target.value)} />

          <button type="submit">Entrar</button>
          {error && (
            <p className="error">
              ❌ Respuestas incorrectas, inténtalo otra vez 😜
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
