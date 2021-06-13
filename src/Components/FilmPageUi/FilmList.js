import React from 'react';
import FilmCart from '../UIAssets/FilmCart/FilmCart';
import { Grid } from '@material-ui/core/';
import FilmListStyle from './FilmListStyle';

const FilmList = props => {
  const classes = FilmListStyle();

  return (
    <Grid className={classes.root}>
      {props.filmData.map((f, i) => (
        <FilmCart
          key={i}
          image={f.Poster}
          Title={f.Title}
          ToolipsTitle={f.Title}
          Rate={f.imdbRating}
          Votes={f.imdbVotes}
          Score={f.Metascore}
          Plot={f.Plot}
        />
      ))}
    </Grid>
  );
};
export default FilmList;
