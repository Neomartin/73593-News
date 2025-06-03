import React from 'react'
import MainTitle from '../MainTitle/MainTitle';
import NewsCard from '../NewsCard/NewsCard';

export default function NewsList({ noticias, cambiarNoticiaADestacada, borrarNoticia, editarNoticia }) {
  return (
      <section className="news-section">
        <MainTitle
          titulo="Noticias Actuales"
          subtitulo="Lo que está pasando en el mundo"
        />

        <div className="news-container">
          {/* Sección donde se van a renderizar las noticias */}

          {noticias.map((noticia) => {
            return (
              <NewsCard
                key={noticia.id}
                noticia={noticia}
                fnCambiar={cambiarNoticiaADestacada}
                fnBorrar={borrarNoticia}
                fnEditar={editarNoticia}
              />
            );
          })}
        </div>
      </section>
  )
}
