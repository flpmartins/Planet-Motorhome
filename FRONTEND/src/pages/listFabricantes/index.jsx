import React, { useState, useEffect, useCallback } from 'react';
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Divider,
  Typography
} from '@mui/material';
import { FiEye } from 'react-icons/fi';
import { BaseLayout } from '../../shared/layouts/baseLayouts';
import { getFactory } from '../../api/planet-motorhome-api';
import { enviroments } from '../../shared/environments';
import { useNavigate } from 'react-router-dom'
import { Container, ActionsButton, ImageFactory } from './styles';
import { ViewFactoryModal } from '../../shared/components/modal-factory/ViewFactoryModal';

export const ListFactorys = () => {
  const navigate = useNavigate();
  const [factories, setFactories] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [selectedFactory, setSelectedFactory] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [setEditModalOpen] = useState(false);

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
  }, [navigate, factories, setEditModalOpen]);

  const getAllFactories = useCallback(async () => {
    try {
      const result = await getFactory();
      setFactories(result.data);
      setRefresh(false);
    } catch (error) {
    }
  }, []);


  useEffect(() => {
    getAllFactories();
  }, [getAllFactories, refresh]);

  return (
    <BaseLayout
      title="Lista de Fábricas"
    >
      <Container>
        <br />
        <Typography variant='h4' style={{ color: '#717339' }}>NOSSAS FABRICANTES</Typography>
        <br />
        <Divider />
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
                        width: '100px',
                        height: '100px',
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
      </Container>
    </BaseLayout >

  );
};
