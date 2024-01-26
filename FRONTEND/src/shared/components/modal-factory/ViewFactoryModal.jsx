// ViewFactoryModal.jsx

import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

export const ViewFactoryModal = ({ open, handleClose, factoryInfo }) => {
  if (!factoryInfo) {
    // Adicione esta verificação para evitar erros caso factoryInfo seja undefined
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
        <Button
          variant="contained"
          onClick={handleClose}
          sx={{
            background: "#717339",
            width: "100%",
            marginBottom: '20px',
            "&:hover": {
              background: "#717339",
            },
          }}
        >
          Fechar
        </Button>
      </Box>
    </Modal>
  );
};
