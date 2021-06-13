/* eslint-disable no-use-before-define */

import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import SearchBarStyle from './SearchBarStyle';

const FilmSearchBar = props => {
  const classes = SearchBarStyle();

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{ backgroundColor: 'black', borderRadius: '5px' }}
      >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            MOVIES
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={props.getSearch}
            />
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default FilmSearchBar;
