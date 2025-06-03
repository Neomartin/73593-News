import React, { useState } from 'react'
import MainTitle from '../MainTitle/MainTitle';

export default function RandomIDGenerator() {
    
  // Petición a la API para obtener las noticias
  const [id, setId] = useState("");

  function generarIDRandom() {
    const idRandom = crypto.randomUUID();

    setId(idRandom);
  }

  return (
    <section className="features">
        <MainTitle titulo="Conoce nuestras Promos" />

        <button className="btn" onClick={() => generarIDRandom()}>
          Generar ID
        </button>

        <span style={{ fontSize: "1.25rem", color: "orangered" }}>{id}</span>
      </section>
  )
}
