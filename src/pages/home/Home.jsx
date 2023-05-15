import './Home.css';

import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <main>
      <div className="listmovser">
        <NavLink to="/peliculas">
          <figure className="figurepeliculas">
            <img
              className="imgmovies"
              src="https://res.cloudinary.com/dpsqwk5qg/image/upload/v1678461477/iconsrrss/download_rza1kg.png"
              alt="movies"
            ></img>
            <h5>Popular Movies</h5>
          </figure>
        </NavLink>
        <NavLink to="/series">
          <figure className="figureseries">
            <img
              className="imgseries"
              src="https://res.cloudinary.com/dpsqwk5qg/image/upload/v1678463838/iconsrrss/download_safj9c.png"
              alt="series"
            ></img>
            <h5>Popular Series</h5>
          </figure>
        </NavLink>
      </div>
    </main>
  );
};
export default Home;
