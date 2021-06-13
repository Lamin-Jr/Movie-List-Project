import React, { useState } from 'react';
import FilmList from './Components/FilmPageUi/FilmList';
import FilmSearchBar from './Components/UIAssets/Navigation/FilmSearchBar';
import Film from './Components/Data/films.json';

import './App.css';

function App() {
  //Listing to the state Change Here
  const [Data, setData] = useState(Film);

  const HandleSearch = async input => {
    //Filtering the Inputed value
    const filmFiltered = Film.filter(movie => {
      //Returning the Filter Target value from the input to the Inserted
      return movie.Title.toLowerCase().includes(
        input.target.value.toLowerCase()
      );
    });
    setData(filmFiltered);
    console.log(filmFiltered);
  };

  return (
    <div className="App">
      <FilmSearchBar Filter={Data} getSearch={HandleSearch} />
      <FilmList filmData={Data} />
    </div>
  );
}

export default App;
