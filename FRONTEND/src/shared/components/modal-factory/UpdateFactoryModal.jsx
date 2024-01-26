import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, InputLabel, Input, Avatar, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { alterFactory, alterAvatarFactory } from '../../../api/planet-motorhome-api';
import { enviroments } from '../../environments';
export const UpdateFactoryModal = ({ open, handleClose, factory, handleUpdateFactory }) => {
  const [originalFactoryInfo, setOriginalFactoryInfo] = useState({
    name: factory?.name || '',
    city: factory?.city || '',
    contact: factory?.contact || '',
    email: factory?.email || '',
  });

  const [factoryInfo, setFactoryInfo] = useState({
    name: factory?.name || '',
    city: factory?.city || '',
    contact: factory?.contact || '',
    email: factory?.email || '',
  });

  const [avatar, setAvatar] = useState(null);

  const handleChange = (e) => {
    setFactoryInfo({
      ...factoryInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const getAvatarSrc = () => {
    if (avatar) {
      return URL.createObjectURL(avatar);
    } else if (factory?.avatar) {
      return `${enviroments.URL_API_PLANETMOTORHOME + '/files/' + factory.avatar}`;
    } else {
      return `https://ui-avatars.com/api/?font-size=.33&background=717339&color=fff&name=${originalFactoryInfo.name}`;
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedFields = {};

      if (factoryInfo.name !== originalFactoryInfo.name) {
        updatedFields.name = factoryInfo.name;
      }

      if (factoryInfo.city !== originalFactoryInfo.city) {
        updatedFields.city = factoryInfo.city;
      }

      if (factoryInfo.contact !== originalFactoryInfo.contact) {
        updatedFields.contact = factoryInfo.contact;
      }

      if (factoryInfo.email !== originalFactoryInfo.email) {
        updatedFields.email = factoryInfo.email;
      }

      if (Object.keys(updatedFields).length > 0) {
        await alterFactory(factory.id, updatedFields);
      }

      if (avatar) {
        const formData = new FormData();
        formData.append('avatar', avatar);
        await alterAvatarFactory(factory.id, formData);
      }

      handleUpdateFactory(factory.id, factoryInfo);

      setFactoryInfo({
        name: '',
        city: '',
        contact: '',
        email: '',
      });
      setAvatar(null);
      handleClose();
    } catch (error) {
      console.error('Erro ao atualizar a fábrica:', error.message);
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
          Atualizar Fábrica
        </Typography>

        {/* Avatar com iniciais ou imagem existente */}
        <Avatar
          src={getAvatarSrc()}
          alt="Avatar"
          sx={{
            width: 100,
            height: 100,
            fontSize: 40,
            backgroundColor: '#717339',
            cursor: 'pointer',
            marginBottom: '20px',
            position: 'relative',
          }}
          onClick={() => document.getElementById('avatarInput').click()}
        >
          <IconButton
            color="inherit"
            component="span"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}
            onClick={(e) => {
              e.stopPropagation();
              document.getElementById('avatarInput').click();
            }}
          >
            <EditIcon />
          </IconButton>
        </Avatar>

        {/* Seletor de arquivo escondido */}
        <Input
          type="file"
          id="avatarInput"
          onChange={handleAvatarChange}
          sx={{ display: 'none' }}
        />

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
        <InputLabel sx={{ marginBottom: '10px', display: 'block' }}>Avatar</InputLabel>
        {/* O seletor de arquivo agora está escondido e é ativado pelo clique no avatar */}
        <Button
          variant="contained"
          onClick={handleUpdate}
          sx={{
            background: '#717339',
            width: '100%',
            marginBottom: '20px',
            '&:hover': {
              background: '#717339',
            },
          }}
        >
          Atualizar
        </Button>
      </Box>
    </Modal>
  );
};
