import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Cargar el tema guardado o 'light' por defecto
    document.documentElement.classList.add(savedTheme); // Aplicar la clase en <html>
  }, []);
  return (
    <div className="container">
      <div className="gradientOverlay"></div>
      <div className="content">
        <button className="waitlistButton">Oops!</button>
        <div className="errorNumber">404</div>
        <h1 className="errorText">
          <span className="textHighlight">Page Not </span>
          <span className="textHighlight">Found!</span>
        </h1>
        <Link to="/">
          <button className="backButton">Back home</button>
        </Link>
      </div>
      <footer className="footer">
        ©2025 Todos los derechos reservados para • <span className="footerHighlight">HotelBits</span>
      </footer>
    </div>
  );
}
