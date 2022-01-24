import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Photo from '../../img/img1596743926897.jpg'
const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    height: 900,
    textAlign: 'center',
  },
  cardDetails: {
    marginTop: theme.spacing(30),
    flex: 1,
  },
  cardMedia: {
    width: 1200,
  },
  typo: {
    fontFamily: 'Bebas Neue',
    fontSize: 24,
  },
  title: {
    fontFamily: 'Cinzel',
    fontSize: 50,
    marginBottom: theme.spacing(8)


  }
}));

export default function Contact(props) {
  const classes = useStyles();


  return (
    <Grid item xs={12} md={6} lg={12}>

        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography className={classes.title} component="h2" variant="h5">
                Cartier Manon
              </Typography>
              <Typography className={classes.typo} variant="subtitle1" color="textSecondary">
                Photography - Video
              </Typography>
              <Typography className={classes.typo} variant="subtitle1" paragraph>
                06.00.00.00.00
              </Typography>
              <Typography className={classes.typo} variant="subtitle1" paragraph>
                Saramon, Gers
              </Typography>
              <Typography className={classes.typo} variant="subtitle1">
                cartier.manon@gmail.com
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={Photo} title='test' />
          </Hidden>
        </Card>

    </Grid>
  );
}

