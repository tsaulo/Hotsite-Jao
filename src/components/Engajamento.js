import React from "react";
import "./Engajamento.css";

const Engajamento = () => {
  return (
    <div className="containergeral">
      <div className="tiktok">
        <a
          href="https://www.tiktok.com/music/O-Triste-%C3%89-Que-Eu-Te-Amo-7377856016106653712"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./tikjao.png" className="tikjao"></img>
        </a>
        <div className="texto">
          <img src="./logotiktok.png"></img>
          <h1>+4 MIL VÍDEOS</h1>
          <p>Clique aqui e participe da trend de "O Triste É Que Eu Te Amo"!</p>
        </div>
      </div>
      <div className="spotify">
        <div className="verde">
          <img src="./logospotify.png" className="logospotify"></img>
          <div className="textoverde">
            <p>
              Clique aqui para ouvir a playlist "
              <b>MIX O Triste É Que Eu Te Amo</b>" e ajudar nos streams!
            </p>
          </div>
        </div>

        <div
          style={{
            left: 0,
            width: "100%",
            height: "152px",
            position: "relative",
          }}
        >
          <iframe
            src="https://open.spotify.com/embed/track/3XlPD6JLXbfqqrlAk4zB2w?utm_source=oembed"
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              position: "absolute",
              border: 0,
            }}
            allow="clipboard-write *; encrypted-media *; fullscreen *; picture-in-picture *;"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Engajamento;
