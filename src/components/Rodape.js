import React from "react";
import "./Rodape.css";

const Rodape = () => {
  return (
    <div className="rodape">
      <p>
        Site projetado por{" "}
        <a
          href="https://x.com/sitejaobrasil"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jão Brasil
        </a>
        . Desenvolvido por{" "}
        <a
          href="https://github.com/tsaulo"
          target="_blank"
          rel="noopener noreferrer"
        >
          @tsaulo
        </a>
      </p>
    </div>
  );
};

export default Rodape;
