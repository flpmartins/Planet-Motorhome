import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ViewFactoryModal = ({ open, handleClose, factoryInfo }) => {
  const navigate = useNavigate();

  const handleModelsButtonClick = () => {
    // Navegue para a página de modelos com o id da fábrica como parâmetro
    navigate(`/models/${factoryInfo.id}`);
  };

  if (!factoryInfo) {
    return null;
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          padding: '30px',
          width: '40%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          p: 4,
        }}
      >
        <Typography variant="h5" mb={2} sx={{
          marginBottom: '20px',
        }}>
          Informações da Fábrica
        </Typography>
        <Typography mb={2} sx={{
          marginBottom: '20px',
        }}>
          <strong>Nome:</strong> {factoryInfo.name}
        </Typography>
        <Typography mb={2} sx={{
          marginBottom: '20px',
        }}>
          <strong>Cidade:</strong> {factoryInfo.city}
        </Typography>
        <Typography mb={2} sx={{
          marginBottom: '20px',
        }}>
          <strong>Contato:</strong> {factoryInfo.contact}
        </Typography>
        <Typography mb={2} sx={{
          marginBottom: '20px',
        }}>
          <strong>Email:</strong> {factoryInfo.email}
        </Typography>
        <Button
          variant="contained"
          onClick={handleModelsButtonClick}
          sx={{
            background: "#717339",
            width: "100%",
            marginBottom: '20px',
            "&:hover": {
              background: "#717339",
            },
          }}
        >
          Conheça nossos modelos
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
