import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import {
  Container,
  Content,
} from './styles';

export const Models = () => {
  return (
    <Container>
      <Content>
        <TableContainer>
          <Table sx={{ minWidth: '80%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>modelo</TableCell>
                <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>tamanho</TableCell>
                <TableCell align="center" style={{ color: '#262626', fontWeight: 'bold' }}>ano</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            </TableBody>
          </Table>
        </TableContainer>
      </Content>
    </Container >
  );
};
