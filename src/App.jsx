import MainTitle from "./components/MainTitle/MainTitle";
import NewsCard from "./components/NewsCard/NewsCard";
import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";


const NEWS = [
  {
    id: 1,
    title: "Argentina clasifica a la final de la Copa América",
    text: "Con un gol de Lautaro Martínez, la selección argentina venció a Colombia y jugará la final este domingo.",
    date: 1752796800000,
    destacado: true,
  },
  {
    id: 2,
    title: "Novak Djokovic vuelve al número 1 del ranking ATP",
    text: "Tras ganar Wimbledon, Djokovic recupera el primer puesto del ranking y supera a Carlos Alcaraz.",
    date: 1752617600000,
    destacado: false,
  },
  {
    id: 3,
    title: "Los Juegos Olímpicos de París comienzan la semana próxima",
    text: "Más de 10.000 atletas participarán en la ceremonia de apertura en el Estadio de Francia.",
    date: 1752883200000,
    destacado: true,
  },
  {
    id: 4,
    title: "Lionel Messi confirma su participación en el Mundial 2026",
    text: "El capitán argentino anunció que jugará su último Mundial en 2026, ilusionando a millones de fanáticos.",
    date: 1752969600000,
    destacado: false,
  },
];

function App() {

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({ mode: "onChange"});


  // Petición a la API para obtener las noticias
  const [ id, setId ] = useState("");


  const [ noticias, setNoticias] = useState(NEWS)

  


  function generarIDRandom() {
    const idRandom = crypto.randomUUID()

    setId(idRandom)
  }

  function cargarNoticia(e) {

    e.preventDefault()

    const el = e.target.elements;

    const nuevaNoticia = {
      id: Date.now(),
      title: el.titulo.value,
      text: el.texto.value,
      date: new Date(el.fecha.value + "T00:00:00").getTime(),
      destacado: el.destacado.checked,
    }

    console.log(nuevaNoticia)

    setNoticias( [ ...noticias, nuevaNoticia ] )

  }

  function submitReactForm(noticia) {
    console.log(noticia);

    noticia.id = crypto.randomUUID();
    noticia.date = new Date(noticia.date + "T00:00:00").getTime();

    setNoticias([ ...noticias, noticia ]);

    // reset();
  }

  function cambiarNoticiaADestacada(id) {
    console.log("Se llamo funcion cambiarNoticias", id)

    // // Buscamos la noticia por su ID
    // const noticia = noticias.find(noti => noti.id === id)
    // // Cuando la encontramos, cambiamos su propiedad "destacado" a true
    // noticia.destacado = true;
    // // y actualizamos el estado de las noticias
    // setNoticias([ ...noticias ])

    const noticiasActualizadas = noticias.map(noti => {

      if(noti.id === id) {
        return { ...noti, destacado: true }
      }
      return noti;

    })

    setNoticias(noticiasActualizadas);
  }


  return (
    <>
      <section className="introduction">
        <MainTitle
          titulo="Bienvenido a Notiblog"
          subtitulo="Las mejores noticias estan aquí"
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          similique sint cum, ullam quam voluptas repudiandae delectus
          consectetur optio nam hic, earum, architecto et accusantium? Aperiam
          earum dolore mollitia neque.
        </p>
      </section>

      <section className="news-section">
        <MainTitle
          titulo="Noticias Actuales"
          subtitulo="Lo que está pasando en el mundo"
        />

        <div className="news-container">
          {/* Sección donde se van a renderizar las noticias */}

          {noticias.map((noticia) => {
            return <NewsCard  key={noticia.id} 
                              noticia={noticia}
                              fnCambiar={cambiarNoticiaADestacada}
                    />;
          })}
        </div>
      </section>

      <section className="news-form">
        <MainTitle
          titulo="Formulario de Noticias"
          subtitulo="Carga aqui las nuevas noticias"
        />


        {/* const {(register, handleSubmit)} = useForm(); */}



        <form className="form" onSubmit={handleSubmit(submitReactForm)}>
          <div className="input-group">
            <label htmlFor="title">Titulo de la noticia</label>
            <input  type="text" 
                    id="title" 
                    { ...register("title", {
                      required: "El título es obligatorio",
                      minLength: {
                        value: 5,
                        message: "El título debe tener al menos 5 caracteres"
                      },
                      maxLength: {
                        value: 10,
                        message: "El título no puede exceder los 100 caracteres"
                      }
                    }
            
                    ) } /> 

            { errors?.title && <span className="input-error">{ errors.title.message }</span> }
            {/* Fin del input */}
          </div>

          <div className="input-group">
            <label htmlFor="text">Texto de la noticia</label>
            <textarea id="text" { ...register("text") } />
          </div>

          <div className="input-group">
            <label htmlFor="date">Fecha de la noticia</label>
            <input type="date" id="date" { ...register("date") } />
          </div>
          <div className="input-group">
            <label htmlFor="featured">Destacar noticia</label>
            <input type="checkbox" id="featured" { ...register("destacado") } />
          </div>

          <button className="btn" type="submit" disabled={!isValid}>Cargar Noticia</button>

        </form>



















        {/* <form className="form" onSubmit={(e) => cargarNoticia(e) }>
            <div className="input-group">
              <label htmlFor="titulo">Título</label>
              <input type="text" id="titulo" name="titulo" />
            </div>
            <div className="input-group">
              <label htmlFor="texto">Texto</label>
              <textarea id="texto" name="texto" />
            </div>
            <div className="input-group">
              <label htmlFor="fecha">Fecha</label>
              <input type="date" id="fecha" name="fecha" />
            </div>
            <div className="input-group">
              <label htmlFor="destacado">Destacado</label>
              <input type="checkbox" id="destacado" name="destacado" />
            </div>
              <button className="btn" type="submit">Cargar</button>
          </form>   */}
      </section>

      <section className="features">
        <MainTitle titulo="Conoce nuestras Promos" />

        <button className="btn" onClick={() => generarIDRandom()}>
          Generar ID
        </button>

        <span style={{ fontSize: "1.25rem", color: "orangered" }}>{id}</span>
      </section>
    </>
  );
}

export default App;
