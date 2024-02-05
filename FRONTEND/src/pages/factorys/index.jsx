import React, { useState, useEffect, useCallback } from 'react';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { FiEdit, FiEye } from 'react-icons/fi';
import { BaseLayout } from '../../shared/layouts/baseLayouts';
import { ListToolbar } from '../../shared/components/ListToolbar';
import { getFactoryByUser, deleteFactory } from '../../api/planet-motorhome-api';
import { enviroments } from '../../shared/environments';
import { useNavigate } from 'react-router-dom';
import { Container, ActionsButton, ImageFactory } from './styles';
import { ViewFactoryModal } from '../../shared/components/modal-factory/ViewFactoryModal';
import { UpdateFactoryModal } from '../../shared/components/modal-factory/UpdateFactoryModal';
import { useTheme } from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { useToast } from '../../shared/hooks/toast';
import { Modal, Box, Typography, Button } from '@mui/material';

export const Factorys = () => {
  const navigate = useNavigate();
  const [factories, setFactories] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [selectedFactory, setSelectedFactory] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const theme = useTheme();
  const { addToast } = useToast();

  const handleSearch = useCallback(() => {
    console.log('FACTORIES - handleSearch');
  }, []);

  const handleDetails = useCallback((id, option) => {
    if (option === 4) {
      const selected = factories.find(factory => factory.id === id);
      setSelectedFactory(selected);
      setViewModalOpen(true);
    } else if (option === 2) {
      const selected = factories.find(factory => factory.id === id);
      setSelectedFactory(selected);
      setEditModalOpen(true);
    } else {
      navigate(`/factory/details/${id}`, { state: { option } });
    }
  }, [navigate, factories]);

  const getAllFactories = useCallback(async () => {
    try {
      const result = await getFactoryByUser();
      setFactories(result.data);
      setRefresh(false);
    } catch (error) {
      console.error('Erro ao obter a lista de fábricas:', error.message);
    }
  }, []);

  useEffect(() => {
    getAllFactories();
  }, [getAllFactories, refresh]);

  const handleDeleteConfirmation = (id) => {
    setSelectedFactory(id);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteFactory = async () => {
    try {
      await deleteFactory(selectedFactory);
      getAllFactories();
      addToast({
        type: 'success',
        title: 'Fábrica excluída com sucesso!',
      });
    } catch (error) {
      console.error('Erro ao excluir a fábrica:', error);
      addToast({
        type: 'error',
        title: 'Erro ao excluir a fábrica',
        description: 'Ocorreu um erro ao tentar excluir a fábrica.',
      });
    } finally {
      setDeleteConfirmationOpen(false);
    }
  };

  const ConfirmationModal = ({ open, handleClose, handleConfirm, title, message }) => {
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
            {title}
          </Typography>
          <Typography mb={2}>{message}</Typography>
          <Button
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
          </Button>
          <Button
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
          </Button>
        </Box>
      </Modal>
    );
  };

  return (
    <BaseLayout
      title="Lista de Fábricas"
      toolbar={<ListToolbar handleSearch={handleSearch} />}
    >
      <Container>
        <TableContainer>
          <Table sx={{ minWidth: '80%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>Imagem</TableCell>
                <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>Nome</TableCell>
                <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>Cidade</TableCell>
                <TableCell style={{ color: '#262626', fontWeight: 'bold' }}>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {factories.map((factory) => (
                <TableRow key={factory.id}>
                  <TableCell align="center">
                    <ImageFactory
                      src={
                        factory.avatar
                          ? `${enviroments.URL_API_PLANETMOTORHOME + '/files/' + factory.avatar}`
                          : `https://ui-avatars.com/api/?font-size=0.33&background=717339&color=fff&name=${encodeURIComponent(factory.name)}`
                      }
                      style={{
                        backgroundColor: theme.background.substring(1, theme.background.length),
                        color: theme.contrast.substring(1, theme.contrast.length),
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">{factory.name}</TableCell>
                  <TableCell align="center">{factory.city}</TableCell>
                  <TableCell align="left">
                    <ActionsButton>
                      <button type="button" onClick={() => handleDetails(factory.id, 2)}>
                        <FiEdit />
                      </button>
                      <button type="button" onClick={() => handleDetails(factory.id, 4)}>
                        <FiEye />
                      </button>
                      <button type="button" className="delete-button" onClick={() => handleDeleteConfirmation(factory.id)} style={{ color: "red" }}>
                        <MdDelete />
                      </button>
                    </ActionsButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <ViewFactoryModal
          open={viewModalOpen}
          handleClose={() => setViewModalOpen(false)}
          factoryInfo={selectedFactory}
        />
        <UpdateFactoryModal
          open={isEditModalOpen}
          handleClose={() => setEditModalOpen(false)}
          factory={selectedFactory}
          handleUpdateFactory={(updatedFactory) => {
            setEditModalOpen(false);
          }}
        />

        <ConfirmationModal
          open={isDeleteConfirmationOpen}
          handleClose={() => setDeleteConfirmationOpen(false)}
          handleConfirm={handleDeleteFactory}
          title="Confirmação de Exclusão"
          message="Tem certeza que deseja excluir esta fábrica?"
        />
      </Container>
    </BaseLayout>
  );
};
