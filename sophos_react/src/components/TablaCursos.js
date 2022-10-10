import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import { Visibility } from '@mui/icons-material';

export default function TablaCursos({ data, showModal }) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>id</strong></TableCell>
            <TableCell><strong>Nombre</strong></TableCell>
            <TableCell align="right"><strong>Créditos</strong></TableCell>
            <TableCell align="right"><strong>Id Maestro</strong></TableCell>
            <TableCell align="right"><strong>Prerrequisito</strong></TableCell>
            <TableCell align="right"><strong>Detalles</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((curso) => (
            <TableRow
              key={curso.idcurso}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{curso.idcurso}</TableCell>
              <TableCell component="th" scope="row">
                {curso.nombre}
              </TableCell>
              <TableCell align="right">{curso.numero_creditos}</TableCell>
              <TableCell align="right">{curso.idmaestro}</TableCell>
              <TableCell align="right">{curso.nombre_prerrequisito}</TableCell>
              <TableCell align="right">
                <IconButton color="primary" aria-label="upload picture" component="label"
                onClick={() => showModal(true, curso)}>
                  <Visibility/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
