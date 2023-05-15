import './getSerie&Movie.css';

import React from 'react';

import Details from '../Details/Details';

const GetMovieySerie = ({ element }) => {
  return (
    <figure className="cr-figure">
      <button className="cr-p1" onClick={(ev) => (ev.target.nextSibling.open = true)}>
        <img src={element.images['Poster Art'].url} alt={element.title} />

        {element.title}
      </button>
      <Details params={element} />
    </figure>
  );
};

export default GetMovieySerie;
