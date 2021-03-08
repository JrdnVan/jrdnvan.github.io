import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ProjectDisplay.css';



function ProjectDisplay(props) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

  const classes = useStyles();

  const openTab = (url) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if (newTab){
      newTab.opener = null;
    }
  }
  return (
    <div className="project-display-container">
      <Card className={classes.root}>
        <CardActionArea onClick={() => openTab(props.demo)}>
          <CardMedia
            component="img"
            alt={props.title}
            height="140"
            image={props.img}
            title={props.title}
          />
          <CardContent
            style={{backgroundColor: "#1A202C", height: "100px"}}
          >
            <Typography gutterBottom variant="h5" component="h2" style={{color: "#FFC821"}}>
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{color: "white"}}>
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          style={{backgroundColor: "#1A202C"}}
        >
          <Button size="small" color="primary" onClick={() => openTab(props.demo)} style={{color: "#FFC821"}}>
            Demo
          </Button>
          <Button size="small" color="primary" onClick={() => openTab(props.github)} style={{color: "#FFC821"}}>
            Github
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProjectDisplay;