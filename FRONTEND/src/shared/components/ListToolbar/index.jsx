// ListToolbar.js
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { Button } from '../form/button';
import { Container } from './style';
import { AddFactoryModal } from '../../components/modal-factory/ AddFactoryModal';

export const ListToolbar = ({ handleSearch, handleNew }) => {
  const theme = useTheme();

  const buttonStyles = {
    color: theme.text2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '200px',
  };

  const [isAddFactoryModalOpen, setIsAddFactoryModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsAddFactoryModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddFactoryModalOpen(false);
  };

  return (
    <Container>
      <Button
        type="button"
        style={buttonStyles}
        variant="contained"
        color="primary"
        onClick={handleNew || handleOpenModal} // Chama handleOpenModal quando o botão é clicado
      >
        <MdAdd size={24} style={{ marginRight: '16px' }} />
        Nova Fábrica
      </Button>
      <AddFactoryModal
        open={isAddFactoryModalOpen}
        handleClose={handleCloseModal} // Passa handleCloseModal como prop onClose
      />
    </Container>
  );
};
