import MainTitle from "./components/MainTitle/MainTitle";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import NewsList from "./components/NewsList/NewsList";
import NewsForm from "./components/NewsForm/NewsForm";
import RandomIDGenerator from "./components/RandomIDGenerator/RandomIDGenerator";

const URL = "https://6838f7486561b8d882aeb42f.mockapi.io";

function App() {


  const [noticiaEditar, setNoticiaEditar] = useState(null);

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // Cargar las noticias desde la API
    obtenerNoticias();

    // Cargar las noticias desde el array de noticias
    // setNoticias(NEWS);
  }, []);

  function obtenerNoticias() {
    // Obtener las noticias desde la API de MockAPI
    axios.get(`${URL}/news`).then((response) => {
      setNoticias(response.data);
    });
  }

  

  // function cargarNoticia(e) {

  //   e.preventDefault()

  //   const el = e.target.elements;

  //   const nuevaNoticia = {
  //     id: Date.now(),
  //     title: el.titulo.value,
  //     text: el.texto.value,
  //     date: new Date(el.fecha.value + "T00:00:00").getTime(),
  //     destacado: el.destacado.checked,
  //   }

  //   console.log(nuevaNoticia)

  //   setNoticias( [ ...noticias, nuevaNoticia ] )

  // }

  

  function cambiarNoticiaADestacada(id) {
    console.log("Se llamo funcion cambiarNoticias", id);

    // // Buscamos la noticia por su ID
    // const noticia = noticias.find(noti => noti.id === id)
    // // Cuando la encontramos, cambiamos su propiedad "destacado" a true
    // noticia.destacado = true;
    // // y actualizamos el estado de las noticias
    // setNoticias([ ...noticias ])

    const noticiasActualizadas = noticias.map((noti) => {
      if (noti.id === id) {
        return { ...noti, destacado: true };
      }
      return noti;
    });

    setNoticias(noticiasActualizadas);
  }

  function borrarNoticia(id) {
    // buscaría la noticia por el ID y obtendriamos el indice (posición de la noticia en el array)
    // Método findIndex
    // const indice = noticias.findIndex(noti => noti.id === id);

    // const arrayCopy = [ ...noticias ];

    // arrayCopy.splice(indice, 1);

    // setNoticias(arrayCopy);

    // Método filter
    // const filteredArray = noticias.filter((noticia) => noticia.id !== id);

    // #Vamos a borrar la noticia de la API
    // console.log("Borrando noticia con ID:", id);
    Swal.fire({
      title: "Desea borrar esta noticia?",
      text: "Esta seguro de que quiere borrar esta noticia",
      icon: "warning",
      showConfirmButton: true,
      confirmButtonText: "Borrar",
      showCancelButton: true,
    }).then((result) => {

      if (result.isConfirmed) {

        axios
          .delete(`${URL}/news/${id}`)
          .then((response) => {
            console.log(response);

            Swal.fire({
              title: 'Noticia eliminada',
              text: 'La noticia se eliminó correctamente',
              icon: 'success'
            })
            
            obtenerNoticias();

            
          }) // then close
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Error!",
              text: "La noticia no se pudo borrar",
              icon: "error",
            }); // Swal fire close
          });

      } // if close

    }); // Swal then close

    // setNoticias(filteredArray);
  }


  function editarNoticia(id) {
  const noticia = noticias.find((noticia) => noticia.id === id);
  setNoticiaEditar(noticia); // el efecto en NewsForm se encargará del reset
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


      <NewsList noticias={noticias}
                cambiarNoticiaADestacada={cambiarNoticiaADestacada}
                borrarNoticia={borrarNoticia}
                editarNoticia={editarNoticia}
      />

      <NewsForm noticiaEditar={noticiaEditar} 
                setNoticiaEditar={setNoticiaEditar}
                obtenerNoticias={obtenerNoticias} />

      <RandomIDGenerator />
    </>
  );
}

export default App;
