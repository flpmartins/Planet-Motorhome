import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Box, Typography, Button } from '@mui/material';

export const ViewFactoryModal = ({ open, handleClose, factoryInfo }) => {
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
        </Typography >
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
          <strong>email:</strong> {factoryInfo.email}
        </Typography>
        <Link to="/models">
          <Button
            variant="contained"
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
        </Link>
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
