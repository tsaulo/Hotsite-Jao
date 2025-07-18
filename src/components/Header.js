import React, { useEffect, useState } from "react";
import Marquee from "./Marquee";
import "./Header.css";

const Header = () => {
  const [macas, setMacas] = useState([]);

  useEffect(() => {
    const intervaloGeracao = setInterval(() => {
      const id = Date.now() + Math.random();
      const left = Math.random() * 90;
      const duration = 7 + Math.random() * 5;
      const rotateStart = -30 + Math.random() * 60;
      const rotateEnd = rotateStart + (-180 + Math.random() * 360);
      const imageIndex = Math.floor(Math.random() * 5) + 1;

      const novaMaca = {
        id,
        left,
        duration,
        rotateStart,
        rotateEnd,
        image: `./maca${imageIndex}.png`,
      };

      setMacas((antes) => [...antes, novaMaca]);

      setTimeout(() => {
        setMacas((antes) => antes.filter((a) => a.id !== id));
      }, duration * 1000 + 500);
    }, 800);

    return () => clearInterval(intervaloGeracao);
  }, []);

  return (
    <div className="header">
      <div className="banner">
        <img src="./bannerjao.png" className="jao" alt="Banner Principal" />

        {macas.map((maca) => (
          <img
            key={maca.id}
            src={maca.image}
            alt="Maçã"
            className="maca"
            style={{
              "--maca-left": `${maca.left}%`,
              "--maca-duration": `${maca.duration}s`,
              "--maca-rotate-start": `${maca.rotateStart}deg`,
              "--maca-rotate-end": `${maca.rotateEnd}deg`,
            }}
          />
        ))}
      </div>

      <Marquee />
    </div>
  );
};

export default Header;
