import React, { useEffect, useState } from 'react';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Typography, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { listModelByUser } from '../../api/planet-motorhome-api';
import { BaseLayout } from '../../shared/layouts/baseLayouts';

export const ListModelsByUser = () => {
  const { userId } = useParams();
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const modelsData = await listModelByUser(userId);
        setModels(modelsData.data);
      } catch (error) {
        console.error('Error fetching models:', error.message);
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
      <Typography variant='h4' style={{ color: '#717339' }}>MEUS MODELOS</Typography>
      <br />
      <Divider />
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
    </BaseLayout>
  );
};
