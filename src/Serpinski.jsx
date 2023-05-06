import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Slider,
  Button,
  makeStyles,
  FormControl,
  Tooltip,
} from "@material-ui/core";
import { ChromePicker } from "react-color";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  canvasContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
  },
  canvas: {
    borderRadius: theme.shape.borderRadius,
  },
  formControl: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  slider: {
    width: "80%",
  },
  colorPicker: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Sierpinski = () => {
  const classes = useStyles();
  const [depth, setDepth] = useState(5);
  const [color, setColor] = useState("#00bcd4");

  const drawSierpinskiTriangle = (ctx, x, y, size, depth) => {
    if (depth === 0) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + size, y);
      ctx.lineTo(x + size / 2, y + size / 2 * Math.sqrt(3));
      ctx.closePath();
      ctx.fill();
    } else {
      const newSize = size / 2;
      drawSierpinskiTriangle(ctx, x, y, newSize, depth - 1);
      drawSierpinskiTriangle(ctx, x + newSize, y, newSize, depth - 1);
      drawSierpinskiTriangle(
        ctx,
        x + newSize / 2,
        y + newSize / 2 * Math.sqrt(3),
        newSize,
        depth - 1
      );
    }
  };

  const handleDepthChange = (e, value) => {
    setDepth(value);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  const handleDrawClick = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;

    drawSierpinskiTriangle(ctx, 0, 0, canvas.width, depth);
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <Tooltip title="Back to Home">
        <Button color="inherit" component={Link} to="/" startIcon={<ArrowBack />}>
          Back
        </Button>
      </Tooltip>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.canvasContainer}>
          <canvas
            id="canvas"
            width="500"
            height="500"
            className={classes.canvas}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth className={classes.formControl}>
            <Typography variant="h6" gutterBottom>
              Sierpinski Triangle Properties
            </Typography>
            <Slider
              value={depth}
              onChange={handleDepthChange}
              min={0}
              max={7}
              marks
              valueLabelDisplay="auto"
              aria-labelledby="depth-slider"
              className={classes.slider}
            />
            <ChromePicker color={color} onChange={handleColorChange} />
            <Button
              variant="contained"
              color="primary"
              onClick={handleDrawClick}
              className={classes.button}
            >
              Draw
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Sierpinski;