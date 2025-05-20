import MainTitle from "./components/MainTitle/MainTitle";
import NewsCard from "./components/NewsCard/NewsCard";
import './App.css';

const NEWS = [
  {
    id: 1,
    title: "Argentina clasifica a la final de la Copa América",
    text: "Con un gol de Lautaro Martínez, la selección argentina venció a Colombia y jugará la final este domingo.",
    date: 1752796800000,
    destacado: true
  },
  {
    id: 2,
    title: "Novak Djokovic vuelve al número 1 del ranking ATP",
    text: "Tras ganar Wimbledon, Djokovic recupera el primer puesto del ranking y supera a Carlos Alcaraz.",
    date: 1752617600000,
    destacado: false
  },
  {
    id: 3,
    title: "Los Juegos Olímpicos de París comienzan la semana próxima",
    text: "Más de 10.000 atletas participarán en la ceremonia de apertura en el Estadio de Francia.",
    date: 1752883200000,
    destacado: true
  },
  {
    id: 4,
    title: "Lionel Messi confirma su participación en el Mundial 2026",
    text: "El capitán argentino anunció que jugará su último Mundial en 2026, ilusionando a millones de fanáticos.",
    date: 1752969600000,
    destacado: false
  }
];


function App() {

  // Petición a la API para obtener las noticias

  return <>
          <section className="introduction">

              <MainTitle titulo="Bienvenido a Notiblog"
                         subtitulo="Las mejores noticias estan aquí"
              />

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod similique sint cum, ullam quam voluptas repudiandae delectus consectetur optio nam hic, earum, architecto et accusantium? Aperiam earum dolore mollitia neque.</p>

          </section>


          <section className="news-section">

            <MainTitle titulo="Noticias Actuales"
                       subtitulo="Lo que está pasando en el mundo"
            />

            <div className="news-container">
              {/* Sección donde se van a renderizar las noticias */}
              
              {
                
            NEWS.map(noticia => {

              return <NewsCard  key={noticia.id} 
              
                                noticia={noticia} />

            })


              }


            
            </div>

          </section>

          <section className="features">
            <MainTitle titulo="Conoce nuestras Promos" />
            OFERTAS
          </section>

        </> 

}

export default App;
