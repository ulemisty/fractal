import React, { useRef, useEffect } from 'react';

const FractalCanvas = ({ width, height, maxIterations, color }) => {
  const canvasRef = useRef(null);

  const drawMandelbrot = (ctx) => {
    const scale = 3;
    const offsetX = width / 2;
    const offsetY = height / 2;

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let zx = x * (scale / width) - scale / 2 - offsetX / width * scale;
        let zy = y * (scale / height) - scale / 2 - offsetY / height * scale;

        let cX = zx;
        let cY = zy;
        let i = 0;

        while (i < maxIterations) {
          const xTemp = zx * zx - zy * zy + cX;
          zy = 2 * zx * zy + cY;
          zx = xTemp;
          if (zx * zx + zy * zy > 4) break;
          i++;
        }

        const colorValue = (i / maxIterations) * 255;
        ctx.fillStyle = `rgb(${color.r * colorValue}, ${color.g * colorValue}, ${color.b * colorValue})`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    drawMandelbrot(ctx);
  }, [width, height, maxIterations, color]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default FractalCanvas;