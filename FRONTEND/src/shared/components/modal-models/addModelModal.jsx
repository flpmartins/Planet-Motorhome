import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { createModels, getFactoryByUser } from '../../../api/planet-motorhome-api';
import { useToast } from '../../hooks/toast';
import * as Yup from 'yup';

export const AddModelModal = ({ open, handleClose }) => {
  const [factories, setFactories] = useState([]);
  const [selectedFactory, setSelectedFactory] = useState('');
  const [modelInfo, setModelInfo] = useState({
    factory_id: '',
    models: '',
    size: '',
    year: '',
  });

  const { addToast } = useToast();

  useEffect(() => {
    const fetchFactories = async () => {
      try {
        const factoriesData = await getFactoryByUser();
        setFactories(factoriesData.data);
      } catch (error) {
        console.error('Error fetching factories:', error.message);
      }
    };

    fetchFactories();
  }, []);

  const handleChange = (e) => {
    setModelInfo({
      ...modelInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectFactory = (e) => {
    const selectedId = e.target.value;
    setSelectedFactory(selectedId);

    // Update the modelInfo with the selected factory_id
    setModelInfo({
      ...modelInfo,
      factory_id: selectedId,
    });
  };

  const handleAddModel = async () => {
    try {
      const schema = Yup.object().shape({
        models: Yup.string().required('O modelo é obrigatório'),
        size: Yup.string().required('O tamanho é obrigatório'),
        year: Yup.string().required('O ano é obrigatório'),
      });

      await schema.validate(modelInfo, { abortEarly: false });

      const modelData = {
        ...modelInfo,
        factory_id: `${String(modelInfo.factory_id)}`,
      };

      await createModels(modelData);

      // Exibindo toast de sucesso
      addToast({
        type: 'success',
        title: 'Modelo criado com sucesso!',
      });

      setModelInfo({
        factory_id: '',
        models: '',
        size: '',
        year: '',
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
        console.error("Erro ao criar o modelo:", error.message);
      }
    }
  };

  const handleCloseModal = () => {
    setSelectedFactory('');
    setModelInfo({
      factory_id: '',
      models: '',
      size: '',
      year: '',
    });
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleCloseModal}>
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
        <div>
          <Typography variant="h5" mb={2}>
            Adicionar Novo Modelo
          </Typography>
          <FormControl fullWidth sx={{ marginBottom: '20px' }}>
            <InputLabel id="select-factory-label">Fábrica</InputLabel>
            <Select
              labelId="select-factory-label"
              id="select-factory"
              value={selectedFactory}
              label="Fábrica"
              onChange={handleSelectFactory}
            >
              {factories.map((factory) => (
                <MenuItem key={factory.id} value={factory.id}>
                  {factory.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Modelo"
            name="models"
            sx={{
              marginBottom: '20px',
            }}
            value={modelInfo.models}
            onChange={handleChange}
            fullWidth
            mb={2}
          />
          <TextField
            label="Tamanho"
            name="size"
            sx={{
              marginBottom: '20px',
            }}
            value={modelInfo.size}
            onChange={handleChange}
            fullWidth
            mb={2}
          />
          <TextField
            label="Ano"
            name="year"
            sx={{
              marginBottom: '20px',
            }}
            value={modelInfo.year}
            onChange={handleChange}
            fullWidth
            mb={2}
          />
          <Button
            variant="contained"
            onClick={handleAddModel}
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
        </div>
        <Button
          variant="contained"
          onClick={handleCloseModal}
          sx={{
            background: "#c53030",
            width: "100%",
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
