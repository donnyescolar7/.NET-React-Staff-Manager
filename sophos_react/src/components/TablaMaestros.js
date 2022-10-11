import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import { FormatListBulleted } from '@mui/icons-material';

export default function TablaMaestros({ data, showModal }) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>id</strong></TableCell>
            <TableCell><strong>Nombre</strong></TableCell>
            <TableCell align="right"><strong>Titulo</strong></TableCell>
            <TableCell align="right"><strong>Experiencia</strong></TableCell>
            <TableCell align="right"><strong>Cursos</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((maestro) => (
            <TableRow
              key={maestro.idmaestro}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{maestro.idmaestro}</TableCell>
              <TableCell component="th" scope="row">
                {maestro.nombre}
              </TableCell>
              <TableCell align="right">{maestro.titulo}</TableCell>
              <TableCell align="right">{maestro.experiencia}</TableCell>
              <TableCell align="right">
                <IconButton color="primary" aria-label="upload picture" component="label"
                onClick={() => showModal(true, maestro.idmaestro)}>
                  <FormatListBulleted/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
