import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { createFactory } from '../../../api/planet-motorhome-api'
export const AddFactoryModal = ({ open, handleClose }) => {

  const [factoryInfo, setFactoryInfo] = useState({
    name: '',
    city: '',
    contact: '',
    email: '',
  });

  const handleChange = (e) => {
    setFactoryInfo({
      ...factoryInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = async () => {
    try {
      const result = await createFactory(factoryInfo)
      console.log(result)
      setFactoryInfo({
        name: '',
        city: '',
        contact: '',
        email: '',
        avatar: '',
      });
      handleClose();
    } catch (error) {
      console.error("Erro ao criar a fábrica:", error.message)
    }
  };


  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          padding: '30px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          p: 4,
        }}
      >
        <Typography variant="h5" mb={2}>
          Adicionar Nova Fábrica
        </Typography>
        <TextField
          label="Nome"
          name="name"
          sx={{
            marginBottom: '20px',
          }}
          value={factoryInfo.name}
          onChange={handleChange}
          fullWidth
          mb={2}
        />
        <TextField
          label="Cidade"
          name="city"
          sx={{
            marginBottom: '20px',
          }}
          value={factoryInfo.city}
          onChange={handleChange}
          fullWidth
          mb={2}
        />
        <TextField
          label="Email"
          name="email"
          sx={{
            marginBottom: '20px',
          }}
          value={factoryInfo.email}
          onChange={handleChange}
          fullWidth
          mb={2}
        />
        <TextField
          label="Contato"
          name="contact"
          sx={{
            marginBottom: '20px',
          }}
          value={factoryInfo.contact}
          onChange={handleChange}
          fullWidth
          mb={2}
        />
        <Button
          variant="contained"
          onClick={handleAdd}
          sx={{
            background: "#717339",
            width: "100%",
            marginBottom: '20px',
            "&:hover": {
              background: "#717339",
            },
          }}
        >
          Adicionar
        </Button>
      </Box>
    </Modal>
  );
};
