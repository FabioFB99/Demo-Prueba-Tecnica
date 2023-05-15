import './Detail.css';

import React from 'react';

const Details = ({ params }) => {
  return (
    <dialog className="Dialogcontainer">
      <div className="divcontainer">
        <div className="imgdetails">
          <img src={params.images['Poster Art'].url} alt={params.title} />
        </div>
        <div className="restodetails">
          <h2>{params.title}</h2>
          <p>{params.description}</p>
          <p>{params.releaseYear}</p>
        </div>
        <button onClick={(ev) => (ev.target.offsetParent.open = false)}>Cerrar</button>
      </div>
    </dialog>
  );
};
export default Details;
