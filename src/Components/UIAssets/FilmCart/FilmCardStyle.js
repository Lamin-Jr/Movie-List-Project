import { makeStyles } from '@material-ui/core/';

const FilmCartStyle = makeStyles(theme => ({
  CartRoot: {
    width: '15%',
    margin: '15px 5px',
  },
  media: {
    height: '450px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
  Title: {
    'font-size': '20px',
    'text-align': 'center',
    'font-weight': 'bold',
  },
  TitleContainer: {
    height: '18px',
    'margin-bottom': '10px',
  },
  ExtraDetails: {
    'font-size': '15px',
    'text-align': 'center',
    'font-weight': 'bold',
  },
  DetailsContainer: {
    'text-align': 'center',
    'font-size': '12px',
  },
}));

export default FilmCartStyle;
