import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Gallery from 'react-youtube-slide';
import { ressources } from './ressources';
import { Container } from '@material-ui/core';

//https://github.com/SEUNGJOOMOON/react-youtube-slide

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 'auto'
    }
}));

export default function VideoGallery(props) {
  const classes = useStyles();


  return (
    <Container width='auto' className={classes.root} >
        <Gallery width='auto' youtubes={ressources} galleryId='gallery1' />
    </Container>
  );
}

