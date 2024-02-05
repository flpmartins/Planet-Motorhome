import React, { useEffect, useState } from 'react';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Typography, Divider } from '@mui/material';
import { Button } from '../../shared/components/form/button';
import { useParams } from 'react-router-dom';
import { listModelByUser, getFactory } from '../../api/planet-motorhome-api';
import { BaseLayout } from '../../shared/layouts/baseLayouts';
import { AddModelModal } from './../../shared/components/modal-models/addModelModal';

export const ListModelsByUser = () => {
  const { userId } = useParams();
  const [models, setModels] = useState([]);
  const [isAddModelModalOpen, setAddModelModalOpen] = useState(false);
  const [selectedFactory, setSelectedFactory] = useState(null);
  const [factories, setFactories] = useState([]);

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

  return (
    <BaseLayout
      title="Lista de Fábricas"
      toolbar={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Typography variant='h4' style={{ color: '#717339', margin: '0' }}>MEUS MODELOS</Typography>
          <Button variant="contained" color="primary" onClick={() => handleOpenAddModelModal()} style={{ width: '200px' }}>
            Adicionar Modelo
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
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(models) && models.map((model) => (
              <TableRow key={model.id}>
                <TableCell align="center">{model.models}</TableCell>
                <TableCell align="center">{model.size}</TableCell>
                <TableCell align="center">{model.year}</TableCell>
                <TableCell align="center">{model.factory_id}</TableCell>
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
    </BaseLayout>
  );
};
