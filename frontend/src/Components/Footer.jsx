const Footer = () => {
  return (
    <>
      <footer className="py-10 bg-[url(https://fundacionalbertomarvelli.org/wp-content/uploads/2022/05/bg2-2.jpg)] text-white footer-stack">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:flex-row md:items-start md:justify-center md:gap-8 w-full max-w-5xl mx-auto px-4 md:max-w-4xl md:px-8 lg:max-w-5xl lg:px-4 ">
          <div className="flex flex-col items-center text-center w-full md:w-1/3 md:items-start md:text-left">
            <strong>
              <h2 style={{ margin: 0 }}>Centro de Formación Profesional</h2>
            </strong>
            <p>CFP Padre Bartolomé Ambrosio</p>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "16px" }}>
              <li>Inscripciones</li>
              <li>Diplomados y Cursos</li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center w-full md:w-1/3 md:items-start md:text-left">
            <strong>
              <h2 style={{ margin: 0 }}>Fundación Alberto Marvelli</h2>
            </strong>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "16px" }}>
              <li>Nosotros</li>
              <li>Nuestra Obra</li>
              <li>Donaciones | Fondo de Becas</li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center w-full md:w-1/3 md:items-start md:text-left">
            <strong>
              <h2 style={{ margin: 0 }}>Contáctanos</h2>
            </strong>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "16px" }}>
              <li>📍 39 Calle “B” 6-69 zona 8</li>
              <li>📞 +502 2209-9999</li>
              <li>✉️ info@fundacionalbertomarvelli.org</li>
              <li>🔗 Facebook.com/CFP.AMBROSIO</li>
              <li>🔗 Instagram.com/cfpbartolomeambrosio/</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="w-full h-8 bg-black"></div>
    </>
  );
};

export default Footer;