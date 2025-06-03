import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import MainTitle from '../MainTitle/MainTitle';
import axios from 'axios';

const URL = "https://6838f7486561b8d882aeb42f.mockapi.io";

export default function NewsForm({ obtenerNoticias, noticiaEditar, setNoticiaEditar }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // Efecto para rellenar el form al editar
  useEffect(() => {
    if (noticiaEditar) {
      reset({
        id: noticiaEditar.id,
        title: noticiaEditar.title,
        text: noticiaEditar.text,
        destacado: noticiaEditar.destacado,
        date: new Date(noticiaEditar.date).toISOString().split("T")[0],
      });
    }
  }, [noticiaEditar, reset]);

  function submitReactForm(noticiaData) {
    noticiaData.date = new Date(noticiaData.date + "T00:00:00").getTime();

    if (noticiaEditar) {
      axios.put(`${URL}/news/${noticiaEditar.id}`, noticiaData)
        .then(() => {
          alert("La noticia se actualizó!");
          obtenerNoticias();
          setNoticiaEditar(null);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      noticiaData.id = crypto.randomUUID();
      axios.post(`${URL}/news`, noticiaData).then((response) => {
        console.log(response.data);
        obtenerNoticias();
      });
    }

    reset({
      title: "",
      text: "",
      destacado: false,
      date: "",
    }); // Limpiar formulario después de enviar
  }

  return (
    <section className="news-form">
      <MainTitle
        titulo="Formulario de Noticias"
        subtitulo="Carga aquí las nuevas noticias"
      />

      <form className="form" onSubmit={handleSubmit(submitReactForm)}>
        <div className="input-group">
          <label htmlFor="title">Título de la noticia</label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "El título es obligatorio",
              minLength: { value: 5, message: "Debe tener al menos 5 caracteres" },
              maxLength: { value: 100, message: "No puede exceder 100 caracteres" }
            })}
          />
          {errors?.title && <span className="input-error">{errors.title.message}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="text">Texto de la noticia</label>
          <textarea id="text" {...register("text")} />
        </div>

        <div className="input-group">
          <label htmlFor="date">Fecha de la noticia</label>
          <input type="date" id="date" {...register("date")} />
        </div>

        <div className="input-group">
          <label htmlFor="featured">Destacar noticia</label>
          <input type="checkbox" id="featured" {...register("destacado")} />
        </div>

        <button className={`btn ${noticiaEditar ? "btn-success" : ""}`} type="submit">
          {noticiaEditar ? "Editar Noticia" : "Cargar Noticia"}
        </button>
      </form>
    </section>
  );
}
