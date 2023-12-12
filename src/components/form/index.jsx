import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Divider } from '@mui/material';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
    console.log('Formulario enviado:', formData);
  };

  return (
    <>
    <Divider/>
    <Container maxWidth="sm" sx={{borderRadius:"10px"}}>
      <Typography variant="h4" align="center" gutterBottom>
        CONTACTANOS
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nombre"
          variant="outlined"
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Correo Electrónico"
          variant="outlined"
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Mensaje"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </Container>
    </>
  )
  ;
};

export default MyForm;