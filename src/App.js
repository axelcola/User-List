import "./App.css";
import Testimonio from "./components/Testimonio";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Testimonios</h1>
        <Testimonio
          nombre="Lisa"
          pais="Uruguay"
          imagen="Lisa"
          cargo="Full-stacl Developer Sr "
          empresa="Axel labs"
          testimonio='"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor 
          (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal 
          manera que logró hacer un libro de textos especimen. "'
        />
        <Testimonio
          nombre="Bart"
          pais="Uruguay"
          imagen="Bart"
          cargo="Front-end Developer Ssr"
          empresa="Axel labs"
          testimonio='"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor 
          (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal 
          manera que logró hacer un libro de textos especimen. "'
        />
        <Testimonio
          nombre="Rafa"
          pais="Uruguay"
          imagen="Rafa"
          cargo="Front-end Developer Jr"
          empresa="Axel labs"
          testimonio='"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor 
          (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal 
          manera que logró hacer un libro de textos especimen. "'
        />
        <Testimonio
          nombre="Marge"
          pais="Uruguay"
          imagen="Marge"
          cargo="Recruiter"
          empresa="Axel labs"
          testimonio="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor 
          (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal 
          manera que logró hacer un libro de textos especimen. "
        />
      </div>
    </div>
  );
}

export default App;
