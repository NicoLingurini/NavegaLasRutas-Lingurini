export const Footer = () => {
  return (
    <footer className="footer">
      <div className="nombreempresa">
        <p className="p">BAZAR CREADO POR NICOLAS LINGURINI</p>
      </div>
      <div className="logoredes">
        <a href="https://www.facebook.com">
          <img
            src="../img/facebook-logo.png"
            alt="Facebook"
            className="imagenredes"
          />
        </a>
        <a href="https://www.instagram.com/">
          <img
            src="../img/instagram.png"
            alt="Instagram"
            className="imagenredes"
          />
        </a>
        <a href="https://www.youtube.com/">
          <img src="../img/youtube.png" alt="YouTube" className="imagenredes" />
        </a>
      </div>
    </footer>
  );
};
