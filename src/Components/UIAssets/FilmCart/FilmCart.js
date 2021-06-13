import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from '@material-ui/core/';
import FilmCartStyle from './FilmCardStyle';

import clsx from 'clsx';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rating from '@material-ui/lab/Rating';

const FilmCart = props => {
  const classes = FilmCartStyle();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.CartRoot}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.ToolipsTitle}
      />
      <CardContent className={classes.TitleContainer}>
        <Typography className={classes.Title}>{props.Title}</Typography>
      </CardContent>

      <CardActions disableSpacing className="expander">
        <IconButton aria-label="add to favorites">
          <Rating max={1} value={1} readOnly />
        </IconButton>
        <IconButton aria-label="share">{props.Rate}</IconButton>
        <IconButton
          className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className={classes.DetailsContainer}>
            Votes: <span className={classes.ExtraDetails}>{props.Votes}</span> |
            Score: <span className={classes.ExtraDetails}>{props.Score}</span>
          </Typography>
          <Typography paragraph>{props.Plot}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default FilmCart;
