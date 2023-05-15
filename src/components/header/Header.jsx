import './Header.css';
const Header = () => {
  return (
    <header className="header-class">
      <div className="header-top">
        <h1>DEMO Streaming</h1>
        <div className="div-header-top">
          <h5>Log in</h5>
          <button className="freetrial">
            <h3>Start your free trial</h3>
          </button>
        </div>
      </div>
      <div className="header-bottom">
        <h1 className="padding-text">Ejemplo Prueba Tecnica</h1>
      </div>
    </header>
  );
};
export default Header;
