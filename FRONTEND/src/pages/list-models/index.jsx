import React, { useEffect, useState } from 'react';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Typography, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { listAllModels } from '../../api/planet-motorhome-api';
import { BaseLayout } from '../../shared/layouts/baseLayouts';

export const ListModels = () => {
  const { userId } = useParams();
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const modelsData = await listAllModels(userId);
        setModels(modelsData.data);
      } catch (error) {
      }
    };

    if (userId) {
      fetchModels();
    }
  }, [userId]);

  console.log('Factory ID:', userId);

  return (
    <BaseLayout>
      <br />
      <Typography variant='h4' style={{ color: '#717339' }}>MODELOS</Typography>
      <br />
      <Divider />
      <TableContainer>
        <Table sx={{ minWidth: '80%' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>Modelo</TableCell>
              <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>Tamanho</TableCell>
              <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>Ano</TableCell>
              <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>ID</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {models.map((model) => (
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
    </BaseLayout>
  );
};
