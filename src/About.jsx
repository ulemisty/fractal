import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '3rem',
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  text: {
    fontSize: '1.2rem',
    lineHeight: '1.5',
    textAlign: 'justify',
  },
}));

function TheoryPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h1" className={classes.title} gutterBottom>
        Теория фракталов
      </Typography>
      <Typography variant="body1" className={classes.text} gutterBottom>
        Фракталы - это самоподобные структуры, которые повторяются в разных масштабах. Они могут быть найдены в природе, искусстве и науке. Изучение фракталов помогает лучше понять мир вокруг нас.
      </Typography>
      <Typography variant="body1" className={classes.text} gutterBottom>
        В этом разделе мы рассмотрим основные концепции фракталов, их математические свойства и примеры использования в различных областях.
      </Typography>
    </Container>
  );
}

export default TheoryPage;