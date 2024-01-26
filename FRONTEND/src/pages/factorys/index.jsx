// Factorys.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { FiEdit, FiEye } from 'react-icons/fi';
import { BaseLayout } from '../../shared/layouts/baseLayouts';
import { ListToolbar } from '../../shared/components/ListToolbar';
import { getFactory } from '../../api/planet-motorhome-api';
import { enviroments } from '../../shared/environments';
import { useNavigate } from 'react-router-dom'
import { Container, ActionsButton, ImageFactory } from './styles';
import { ViewFactoryModal } from '../../shared/components/modal-factory/ViewFactoryModal';
import { UpdateFactoryModal } from '../../shared/components/modal-factory/UpdateFactoryModal';

export const Factorys = () => {
  const navigate = useNavigate();
  const [factories, setFactories] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [selectedFactory, setSelectedFactory] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

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
      const result = await getFactory();
      setFactories(result.data);
      setRefresh(false);
    } catch (error) {
      console.error('Erro ao obter a lista de fábricas:', error.message);
    }
  }, []);

  const handleEditFactory = (factory) => {
    setSelectedFactory(factory);
    setEditModalOpen(true);
  };

  useEffect(() => {
    getAllFactories();
  }, [getAllFactories, refresh]);

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
                <TableCell style={{ color: '#262626', fontWeight: 'bold' }}>Ações</TableCell>
                <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>Imagem</TableCell>
                <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>Nome</TableCell>
                <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>Cidade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {factories.map((factory) => (
                <TableRow key={factory.id}>
                  <TableCell align="left">
                    <ActionsButton>
                      <button type="button" onClick={() => handleDetails(factory.id, 2)}>
                        <FiEdit />
                      </button>
                      <button type="button" onClick={() => handleDetails(factory.id, 4)}>
                        <FiEye />
                      </button>
                    </ActionsButton>
                  </TableCell>
                  <TableCell align="center">
                    <ImageFactory
                      src={
                        factory.picture
                          ? `${enviroments.URL_API_PLANETMOTORHOME}/files/${factory.picture}`
                          : `https://ui-avatars.com/api/?font-size=0.33&background=717339&color=fff&name=${factory?.name}`
                      }
                      style={{
                        backgroundColor: '#717339',
                        color: '#fff',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">{factory.name}</TableCell>
                  <TableCell align="center">{factory.city}</TableCell>
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
      </Container>
    </BaseLayout>

  );
};
