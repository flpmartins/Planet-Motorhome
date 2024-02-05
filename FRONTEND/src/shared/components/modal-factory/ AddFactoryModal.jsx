import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { createFactory } from '../../../api/planet-motorhome-api';
import { useToast } from '../../hooks/toast';
import * as Yup from 'yup';

export const AddFactoryModal = ({ open, handleClose }) => {
  const { addToast } = useToast();

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
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        city: Yup.string().required('A cidade é obrigatória'),
        contact: Yup.string().required('O contato é obrigatório'),
        email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
      });

      await schema.validate(factoryInfo, { abortEarly: false });

      const result = await createFactory(factoryInfo);
      console.log(result);

      // Exibindo toast de sucesso
      addToast({
        type: 'success',
        title: 'Fábrica criada com sucesso!',
      });

      setFactoryInfo({
        name: '',
        city: '',
        contact: '',
        email: '',
      });
      handleClose();
    } catch (error) {
      // Se houver erro de validação Yup, exibir os erros no formRef
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          addToast({
            type: 'error',
            title: 'Erro de validação',
            description: err.message,
          });
        });
      } else {
        console.error("Erro ao criar a fábrica:", error.message);
      }
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          padding: '25px',
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
        <Button
          variant="contained"
          onClick={handleClose}
          sx={{
            background: "#c53030",
            width: "100%",
            marginBottom: '20px',
            "&:hover": {
              background: "#c53030",
            },
          }}
        >
          Fechar
        </Button>
      </Box>
    </Modal>
  );
};
