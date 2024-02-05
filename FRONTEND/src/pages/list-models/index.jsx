import React, { useEffect, useState } from 'react';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Typography, Divider } from '@mui/material';
import { Button } from '../../shared/components/form/button';
import { useParams } from 'react-router-dom';
import { listModelByUser, getFactory, deleteModel } from '../../api/planet-motorhome-api';
import { BaseLayout } from '../../shared/layouts/baseLayouts';
import { AddModelModal } from './../../shared/components/modal-models/addModelModal';
import { MdDelete } from 'react-icons/md';
import { useToast } from '../../shared/hooks/toast';
import { Modal, Box, Button as MuiButton, Typography as MuiTypography } from '@mui/material';
import { MdAdd } from 'react-icons/md';

export const ListModelsByUser = () => {
  const { userId } = useParams();
  const [models, setModels] = useState([]);
  const [isAddModelModalOpen, setAddModelModalOpen] = useState(false);
  const [selectedFactory, setSelectedFactory] = useState(null);
  const [factories, setFactories] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const modelsData = await listModelByUser(userId);
        setModels(modelsData.data);
      } catch (error) {
        console.error('Error fetching models:', error.message);
      }
    };

    const fetchFactories = async () => {
      try {
        const factoriesData = await getFactory();
        setFactories(factoriesData.data);
      } catch (error) {
        console.error('Error fetching factories:', error.message);
      }
    };

    if (userId) {
      fetchModels();
      fetchFactories();
    }
  }, [userId]);

  const handleOpenAddModelModal = (factoryId) => {
    setSelectedFactory(factoryId);
    setAddModelModalOpen(true);
  };

  const handleCloseAddModelModal = () => {
    setSelectedFactory(null);
    setAddModelModalOpen(false);
  };

  const handleDeleteConfirmation = (model) => {
    setSelectedModel(model);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteModel = async () => {
    try {
      await deleteModel(selectedModel.id);
      const updatedModels = models.filter((model) => model.id !== selectedModel.id);
      setModels(updatedModels);
      addToast({
        type: 'success',
        title: 'Modelo excluído com sucesso!',
      });
    } catch (error) {
      console.error('Erro ao excluir o modelo:', error);
      addToast({
        type: 'error',
        title: 'Erro ao excluir o modelo',
        description: 'Ocorreu um erro ao tentar excluir o modelo.',
      });
    } finally {
      setDeleteConfirmationOpen(false);
    }
  };

  return (
    <BaseLayout
      title="Lista de Fábricas"
      toolbar={
        <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', width: '100%', textAlign: 'center' }}>
          <Button variant="contained" color="primary" onClick={() => handleOpenAddModelModal()} style={{ width: '200px' }}>
          </Button>
        </div>
      }>
      <br />
      <Divider />
      <br />
      <TableContainer>
        <Table sx={{ minWidth: '80%' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>Modelo</TableCell>
              <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>Tamanho</TableCell>
              <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>Ano</TableCell>
              <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>ID FABRICANTE</TableCell>
              <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(models) && models.map((model) => (
              <TableRow key={model.id}>
                <TableCell align="center">{model.models}</TableCell>
                <TableCell align="center">{model.size}</TableCell>
                <TableCell align="center">{model.year}</TableCell>
                <TableCell align="center">{model.factory_id}</TableCell>
                <TableCell align="center">
                  <MuiButton onClick={() => handleDeleteConfirmation(model)} style={{ color: 'red' }}>
                    <MdDelete />
                  </MuiButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AddModelModal
        open={isAddModelModalOpen}
        handleClose={handleCloseAddModelModal}
        selectedFactory={selectedFactory}
        factories={factories}
      />

      <DeleteConfirmationModal
        open={isDeleteConfirmationOpen}
        handleClose={() => setDeleteConfirmationOpen(false)}
        handleConfirm={handleDeleteModel}
        title="Confirmação de Exclusão"
        message="Tem certeza que deseja excluir este modelo?"
      />
    </BaseLayout>
  );
};

const DeleteConfirmationModal = ({ open, handleClose, handleConfirm, title, message }) => {
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
        <MuiTypography variant="h5" mb={2}>
          {title}
        </MuiTypography>
        <MuiTypography mb={2}>{message}</MuiTypography>
        <MuiButton
          variant="contained"
          onClick={handleConfirm}
          sx={{
            background: '#717339',
            width: '100%',
            marginBottom: '20px',
            '&:hover': {
              background: '#717339',
            },
          }}
        >
          Confirmar
        </MuiButton>
        <MuiButton
          variant="contained"
          onClick={handleClose}
          sx={{
            background: '#c53030',
            width: '100%',
            '&:hover': {
              background: '#c53030',
            },
          }}
        >
          Cancelar
        </MuiButton>
      </Box>
    </Modal>
  );
};
