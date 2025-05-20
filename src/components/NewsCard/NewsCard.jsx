import './NewsCard.css';

function NewsCard({ noticia }) {

    // const { id, title, text, destacado, date } = noticia;

    return (
      <article className="news-card">
        <h2 className="title">{noticia.title}</h2>

        <p className="text">{noticia.text}</p>

        {
            noticia.destacado && 
            <div className="featured">DESTACADO</div>
        }

        <div className="date">{noticia.date}</div>
      </article>
    );
}

export default NewsCard;
