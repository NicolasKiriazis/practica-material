import React from 'react';
import { Divider, Grid, Paper, Typography } from '@mui/material';

const imageUrls = [
  'https://i.ibb.co/6XZ9SfM/celular-con-una-tienda-virtual-tipo-e-commerce-fondo-lila-y-rosado.png',
  'https://i.ibb.co/sg2H7gK/Disen-o-sin-ti-tulo.png',
  'https://i.ibb.co/wWXg0gJ/celular-con-una-tienda-virtual-abierta-fondo-lila-y-rosado.png',
];

const ImageGrid = () => {
  return (
    <>
    <Divider/>
    <div style={{ padding: 16 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Nuestros Servicios
      </Typography>
      <Grid container spacing={3}>
        {imageUrls.map((url, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
            <Paper elevation={3}>
              <img src={url} alt={`Imagen ${index + 1}`} style={{ width: '100%', height: '400px' }} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
    </>
  );
};

export default ImageGrid;