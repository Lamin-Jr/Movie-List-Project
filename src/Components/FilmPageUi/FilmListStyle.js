import { makeStyles } from '@material-ui/core/';

const FilmListStyle = makeStyles(theme => ({
  root: {
    // flexGrow: 3,
    width: '100%',
    display: 'flex',
    'flex-wrap': 'wrap',
    'align-items': 'flex-start',
    'justify-content': 'flex-start',
    margin: '5px 3%',
  },
  paper: {
    padding: '20px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  flex: {
    display: 'flex',
    width: '100%',
  },
}));

export default FilmListStyle;
