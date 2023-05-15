import axios from 'axios';
import { useEffect, useState } from 'react';

import GetMovieySerie from '../../components/getSerie&Movie/getSerie&Movie';
import useDebounce from '../../hook/useDebounced';
import MainGallery from '../../layout/MainGallery';

const Peliculas = () => {
  // https:raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json

  const [filteredPeliculas, setFilteredPeliculas] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const debouncedValue = useDebounce(filteredPeliculas, 1000);
  const getPeliculas = async () => {
    const res = await axios.get(
      'https:raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
    );
    const data = res.data.entries;
    const filter = data.filter(
      (item) => item.programType == 'movie' && parseInt(item.releaseYear) >= 2010,
    );
    //carros.sort(((a, b) => a.modelo - b.modelo));
    filter.sort((x, y) => {
      if (x.title < y.title) {
        return -1;
      } else if (x.title > y.title) {
        return 1;
      } else {
        return 0;
      }
    });

    setFilteredPeliculas(filter);
    setLoaded(true);
  };

  useEffect(() => {
    getPeliculas();
  }, []);

  return (
    <main>
      {loaded ? (
        <MainGallery>
          {debouncedValue.map((element) => (
            <GetMovieySerie element={element} key={element.title} />
          ))}
        </MainGallery>
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
};
export default Peliculas;
