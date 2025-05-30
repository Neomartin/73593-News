
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatTimestampToDate } from '../../utils/FormatDate';
import './NewsCard.css';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

function NewsCard({ noticia, fnCambiar, fnBorrar, fnEditar }) {

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

        <div className="btn-container">
          {/* # Borrar */}
          <button className="deleteNews"  
                  onClick={() => fnBorrar(noticia.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          {/* # Editar */}
          <button className="editNews" onClick={() => fnEditar(noticia.id)}>
            <FontAwesomeIcon icon={faPencil} />
          </button>
        </div>

      </article>
    );
}

export default NewsCard;
