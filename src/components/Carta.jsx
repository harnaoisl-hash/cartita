import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import "./Carta.css";

// 📸 Importar tus fotos
import f1 from "../assets/fotos/f1.jpeg";
import f2 from "../assets/fotos/f2.jpeg";
import f3 from "../assets/fotos/f3.jpeg";
import f4 from "../assets/fotos/f4.jpeg";
import f5 from "../assets/fotos/f5.jpeg";
import f6 from "../assets/fotos/f6.jpeg";
import f8 from "../assets/fotos/f8.jpeg";

const Carta = () => {
  const [abierta, setAbierta] = useState(false);

  // 💖 corazones flotando
  useEffect(() => {
    const crearCorazon = () => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 3 + 2 + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    };
    const interval = setInterval(crearCorazon, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carta-container">
      {/* Cabecera */}
      <header className="header">
        💌 Feliz Aniversario Cachetona 6/11/2025 💌
      </header>

      {/* Contenido central */}
      <motion.div
        className="contenido"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Imagen animada de carta */}
        {!abierta ? (
          <motion.img
            src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f48c.png"
            alt="carta cerrada"
            className="carta-img"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.6 }}
          />
        ) : (
          <motion.img
            src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4e9.png"
            alt="carta abierta"
            className="carta-img"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 360 }}
            transition={{ duration: 0.8 }}
          />
        )}

        {/* Botón de abrir/cerrar */}
        <button className="boton" onClick={() => setAbierta(!abierta)}>
          {abierta ? "Cerrar" : "Abrir"}
        </button>

        {/* Mensaje */}
        {abierta && (
          <div className="mensaje-contenedor">
            <div className="mensaje marco">
              <ReactTyped
                strings={[
                  "Mi Adelita, mi bebita, mi futura esposita. Hoy compartimos un día muy especial, conmemorando todo el tiempo que hemos vivido juntos y cómo hemos ido desarrollando y fortaleciendo nuestra relación. Gracias por seguir caminando a mi lado, por elegirme y por aguantarme. Cada día contigo es único, y no hay mejor forma de terminar una jornada pesada de trabajo que viéndonos y riéndonos de nuestras ocurrencias. Me he dado cuenta de que, conforme he ido creciendo, mi mentalidad también ha cambiado, y gran parte de que ese cambio sea bueno y con miras a un futuro mejor, es gracias a ti, mi amor. Tú eres mi motivación, mi fuerza para seguir adelante y la persona con la que quiero cumplir todas las metas que nos propongamos. Espero que te haya gustado esta cartita. 💌",
                ]}
                typeSpeed={30}
                showCursor={false}
                onComplete={() => {
                  const dedicatoria = document.createElement("div");
                  dedicatoria.className = "dedicatoria";
                  dedicatoria.textContent = "Te ama, James Guajo 💖";
                  document
                    .querySelector(".mensaje-contenedor")
                    .appendChild(dedicatoria);
                }}
              />
            </div>
          </div>
        )}
      </motion.div>

      {/* Galería */}
      <section className="galeria">
        <h2>📸 Nuestros momentos juntos</h2>
        <div className="fotos">
          <div className="foto">
            <img src={f1} alt="Nosotros 1" />
          </div>
          <div className="foto">
            <img src={f2} alt="Nosotros 2" />
          </div>
          <div className="foto">
            <img src={f3} alt="Nosotros 3" />
          </div>
          <div className="foto">
            <img src={f4} alt="Nosotros 4" />
          </div>
          <div className="foto">
            <img src={f5} alt="Nosotros 5" />
          </div>
          <div className="foto">
            <img src={f6} alt="Nosotros 6" />
          </div>
          <div className="foto">
            <img src={f8} alt="Nosotros 7" />
          </div>
          <div className="foto">
            <img src={f8} alt="Nosotros 8" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carta;
