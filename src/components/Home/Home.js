import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import images from './images';
import { Box, Container, Fab, Grid, Typography } from '@material-ui/core';

import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
// https://swiperjs.com/demos/

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Bebas Neue',
    
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    width: '100%',
    height: '100%',

    display: 'block',
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'Playfair Display',
    paddingTop: theme.spacing(4),
    textAlign: 'center'
  },
  extendedIcon: {
    color:'black',
    alignItems: 'right',
    marginRight: theme.spacing(1),
  },
  par: {
    marginBottom: theme.spacing(10)
  }
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Slide  right>

        <AutoPlaySwipeableViews
          axis={theme.direction='x'}
          interval='3000'
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Slide>
      {/* <Fab variant="extended" size="medium" color="default">
        <ArrowDropDownCircleOutlinedIcon fontSize='large' className={classes.extendedIcon}/>
        Scroll
      </Fab> */}
  

      <Fade left>
      <Typography variant="h3" display="block" gutterBottom className={classes.title}>
        Photography - Video
      </Typography>
      <Container>
        <Typography className={classes.par} variant="p" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Et ligula ullamcorper malesuada proin libero. Volutpat consequat mauris nunc congue nisi vitae suscipit. Enim ut tellus elementum sagittis vitae et. Euismod nisi porta lorem mollis aliquam ut. Imperdiet dui accumsan sit amet nulla facilisi. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Purus semper eget duis at tellus at urna condimentum mattis. Augue neque gravida in fermentum et sollicitudin ac orci. Et odio pellentesque diam volutpat commodo sed. Non consectetur a erat nam at. Sit amet risus nullam eget. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu.
        </Typography>

      </Container>
      </Fade>

    </div>
  );
}

export default Home;