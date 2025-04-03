export const Footer = () => {
  return (
    <footer className="footer">
      <div className="nombreempresa">
        <p className="p">BAZAR CREADO POR NICOLAS LINGURINI</p>
      </div>
      <div className="logoredes">
        <a href="https://www.facebook.com">
          <img
            src="https://img.freepik.com/fotos-premium/logotipo-facebook_1080029-107.jpg?w=740"
            alt="Facebook"
            className="imagenredes"
          />
        </a>
        <a href="https://www.instagram.com/">
          <img
            src="https://img.freepik.com/vector-gratis/instagram-nuevo-icono_1057-2227.jpg?t=st=1743705004~exp=1743708604~hmac=25d024e1c3e08d70b422b7e86da213bc74fb8604aeb533b1cc87b23f9914cdce&w=740"
            alt="Instagram"
            className="imagenredes"
          />
        </a>
        <a href="https://www.youtube.com/">
          <img
            src="https://img.freepik.com/fotos-premium/logotipo-youtube_1080029-105.jpg?w=740"
            alt="YouTube"
            className="imagenredes"
          />
        </a>
      </div>
    </footer>
  );
};
