import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import images from './images';
import { Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Pulse from 'react-reveal/Pulse';
import Bounce from 'react-reveal/Bounce';
import YouTube from '@u-wave/react-youtube';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',

  },
  gridList: {
  
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 80%)',
      fontFamily: 'Playfair Display',


  },
  link: {
    fontFamily: 'Playfair Display',
    color: '#000000',
    fontSize: 24,
    marginLeft: theme.spacing(10),
  },
  img: {
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    height: 'auto'


  },
  title: {
    fontFamily: 'Playfair Display',
    textAlign: 'center',

  }
}));

    
   
export default function Galery() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>  

      <div>
          <Typography variant="h2" component="h2" className={classes.title}>
              Photos
          </Typography>
          <GridList cellHeight={'auto'} spacing={1} className={classes.gridList} cols={3}>
          {images.map((tile) => (
            
            <GridListTile key={tile.img} cols={tile.cols} rows={tile.rows}>
              <Pulse>
              <img className={classes.img}  src={tile.img} alt={tile.title} />
              </Pulse>
              <GridListTileBar
                  titlePosition="bot"
                  actionIcon={
                    <Bounce left>
                      <Link className={classes.link} to={tile.to}>{tile.title}</Link>
                    </Bounce>
                  }
                  actionPosition="left"
                  className={classes.titleBar}
              />
              </GridListTile>
          ))}
          </GridList>
          <Typography variant="h2" component="h2" className={classes.title}>
              Vidéo
          </Typography>
          <Container>

          <Grid maxWidth="sm" container>
            <Grid item xs={9}>
              <YouTube
                  video='D_Scedo8JYc'
                  autoplay
                  muted='true'
                  width='100%'
                  height='460'
                  allowFullScreen='allowfullscreen'
                  />
            </Grid>
            <Grid 
            direction="column"
            justify="center"
            alignItems="flex-end"
            item xs={3}
            >
              <Grid item xs={3}>
                <YouTube
                  video='D_Scedo8JYc'
                  muted='true'
                  />
              </Grid>
              <Grid item xs={3}>
                <YouTube
                  video='D_Scedo8JYc'
                  muted='true'
                  />
              </Grid>
              <Grid item xs={3}>
                <YouTube
                  video='D_Scedo8JYc'
                  muted='true'
                  />
              </Grid>
            </Grid>
          


        </Grid>
    
          </Container>
    
      </div>
    </Container>
  );
}
