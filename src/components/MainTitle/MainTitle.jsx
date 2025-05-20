import './MainTitle.css'

const MainTitle = ({ titulo, subtitulo }) => {

	return (
    <div className="main-title">
      <h1 className="title">{titulo}</h1>

      {  subtitulo && <p className="subtitle">{subtitulo}</p>   }

    </div>
  );

}


export default MainTitle

