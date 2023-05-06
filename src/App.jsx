import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography, Grid } from '@material-ui/core';
import Mandelbrot from './Mandelbrot';
import Serpinski from './Serpinski';
import Theory from './Theory';

// Создание стилей с помощью Material-UI
const useStyles = makeStyles((theme) => ({
  greeting: {
    height: '70vh',
    backgroundImage: 'url("./src/assets/bg.jpg")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#000',
  },
  card: {
    margin: theme.spacing(2),
    width: '80%', // уменьшенный размер карточек
    cursor: 'pointer',

    '&:hover': {
      boxShadow: `0 0 11px rgba(33,33,33,.2)`,
    }
  },
  media: {
    height: 140,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element = {
            <>
              <div className={classes.greeting}>
                <Typography variant="h1">Добро пожаловать на сайт о фракталах!</Typography>
              </div>
              <Grid container justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card} >
                  <Link to="/theory">
                    <CardMedia
                      className={classes.media}
                      image="./src/assets/theory.jpg"
                      title="Card image 1"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Теория
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Изучайте теорию фракталов
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Link to="/serpinski">
                    <CardMedia
                      className={classes.media}
                      image="./src/assets/sierpinski.jpg"
                      title="Card image 2"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Треугольник Серпинского
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Создайте свой треугольник Серпинского
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Link to="/mandelbrot">
                    <CardMedia
                      className={classes.media}
                      image="./src/assets/mandelbrot.jpg"
                      title="Card image 3"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Множество Мандельброта
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Создайте свое собственное множество Мандельброта
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            </Grid>
            </>} 
          />

          <Route path="/theory" element = {<Theory />} />
          <Route path="/serpinski" element = {<Serpinski />} />
          <Route path="/mandelbrot" element = {<Mandelbrot />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;