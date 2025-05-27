
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatTimestampToDate } from '../../utils/FormatDate';
import './NewsCard.css';
import { faStar } from '@fortawesome/free-regular-svg-icons';

function NewsCard({ noticia, fnCambiar }) {

    // const { id, title, text, destacado, date } = noticia;

    return (
      <article className="news-card">
        <h2 className="title">{noticia.title}</h2>

        <p className="text">{noticia.text}</p>

        {
            noticia.destacado ? 
            <div className="featured">DESTACADO</div>
            : <FontAwesomeIcon icon={faStar} onClick={ () => fnCambiar(noticia.id) } />
        }

        <div className="date">{ formatTimestampToDate(noticia.date) }</div>
      </article>
    );
}

export default NewsCard;
