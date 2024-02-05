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
import { useTheme } from 'styled-components';
import { ViewFactoryModal } from '../../shared/components/modal-factory/ViewFactoryModal';
export const ListFactorys = () => {
  const navigate = useNavigate();
  const theme = useTheme()
  const [factories, setFactories] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [selectedFactory, setSelectedFactory] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [setEditModalOpen] = useState(false);

  const [picture, setPicture] = useState(() => {

    const appData = JSON.parse(localStorage.getItem(enviroments.APP_NAME));

    if (appData && appData.factory && appData.factory.avatar) {
      return appData.factory.avatar;
    }

    return '';
  });

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
                <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>Avatar</TableCell>
                <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>Nome</TableCell>
                <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>Cidade</TableCell>
                <TableCell style={{ color: '#262626', fontWeight: 'bold', position: 'end' }}>Ações</TableCell>
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
                      <button type="button" onClick={() => handleDetails(factory.id, 4)}>
                        <FiEye />
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
      </Container>
    </BaseLayout >
  );
};