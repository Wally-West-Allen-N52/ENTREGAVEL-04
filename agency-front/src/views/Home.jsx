import React from "react";
import foo from "../imgs/foo.jpg";

export default function Home() {
    return (
        <div className="container">
        <img src={foo} alt="Primeiro Slide" />
          <a href="/cadastroVagas" className="btn btn-danger">Vagas Disponíveis</a>
    </div>
    );
}