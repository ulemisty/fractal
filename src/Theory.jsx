import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, CardMedia, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  card: {
    maxWidth: 800,
    marginBottom: theme.spacing(4),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  content: {
    textAlign: 'justify',
  },
}));

const Theory = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h2" component="h1" gutterBottom>
        Теория фракталов
      </Typography>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://your-fractal-image-url.com"
          title="Фрактал"
        />
        <CardContent className={classes.content}>
          <Typography variant="h5" component="h2" gutterBottom>
            Что такое фракталы?
          </Typography>
          <Typography variant="body1">
            Фракталы - это геометрические объекты с самоподобной структурой, которая повторяется на разных масштабах. Они обладают свойством самоподобия, что означает, что их части подобны целому объекту. Фракталы часто используются для моделирования сложных структур в природе, таких как облака, деревья и снежинки.
          </Typography>
        </CardContent>
      </Card>
      {/* Добавьте другие подразделы теории, следуя данной структуре */}
    </Container>
  );
};

export default Theory;