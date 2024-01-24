import React, { useState, useEffect, useCallback } from 'react';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import { FiEdit, FiEye } from 'react-icons/fi';
import { BaseLayout } from '../../shared/layouts/baseLayouts';
import { ListToolbar } from '../../shared/components/ListToolbar';
import { getFactory } from '../../api/planet-motorhome-api';
import { enviroments } from '../../shared/environments';
import { useNavigate } from 'react-router-dom'
import { Container, ActionsButton, ImageFactory } from './styles';

export const Factorys = () => {
  const navigate = useNavigate();
  const [factories, setFactories] = useState([]);
  const [refresh, setRefresh] = useState(false)

  const handleSearch = useCallback(() => {
    console.log('FACTORIES - handleSearch');
  }, [])

  const handleDetails = useCallback((id, option) => {
    navigate(`/factory/details/${id}`, { state: { option } })
  }, [navigate])

  const getAllFactories = useCallback(async () => {
    try {
      const result = await getFactory();
      setFactories(result.data);
      setRefresh(false);
    } catch (error) {
      console.error('Erro ao obter a lista de fábricas:', error.message);
    }
  }, []);

  useEffect(() => {
    getAllFactories();
  }, [getAllFactories, refresh]);

  return (
    <BaseLayout
      title="lista de fábricas"
      toolbar={<ListToolbar handleSearch={handleSearch} />}
    >
      <Container>
        <TableContainer >
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
                      src={factory.picture ? `${enviroments.URL_API_PLANETMOTORHOME}/files/${factory.picture}` : `https://ui-avatars.com/api/?font-size=0.33&background=717339&color=fff&name=${factory?.name}`}
                    />
                  </TableCell>
                  <TableCell align="center">{factory.name}</TableCell>
                  <TableCell align="center">{factory.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </TableContainer>
      </Container>
    </BaseLayout>
  );
};
