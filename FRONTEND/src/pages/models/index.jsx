import React, { useEffect, useState } from 'react';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Typography, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { listAllModels } from '../../api/planet-motorhome-api';
import { BaseLayout } from '../../shared/layouts/baseLayouts';

export const Models = () => {
  const { factoryId } = useParams();
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const modelsData = await listAllModels(factoryId);
        console.log('Dados dos modelos:', modelsData);
        setModels(modelsData.data);
      } catch (error) {
        console.error('Erro ao buscar modelos:', error.message);
      }
    };

    if (factoryId) {
      fetchModels();
    }
  }, [factoryId]);

  console.log('Factory ID:', factoryId);

  return (
    <BaseLayout>
      <br />
      <Typography variant='h4' style={{ color: '#717339' }}>MODELOS DA FABRICANTE</Typography>
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
