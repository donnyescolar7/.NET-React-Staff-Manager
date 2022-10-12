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

export default function TablaEstudiantes({ data, showModal }) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>id</strong></TableCell>
            <TableCell><strong>Nombre</strong></TableCell>
            <TableCell align="center"><strong>Facultad</strong></TableCell>
            <TableCell align="center"><strong>Semestre</strong></TableCell>
            <TableCell align="center"><strong>Cant. Creditos</strong></TableCell>
            <TableCell align="center"><strong>Cursos</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((estudiante) => (
            <TableRow
              key={estudiante.idestudiante}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{estudiante.idestudiante}</TableCell>
              <TableCell component="th" scope="row">
                {estudiante.nombre}
              </TableCell>
              <TableCell align="center">{estudiante.facultad}</TableCell>
              <TableCell align="center">{estudiante.semestre}</TableCell>
              <TableCell align="center">{estudiante.cant_creditos}</TableCell>
              <TableCell align="center">
                <IconButton color="primary" aria-label="upload picture" component="label"
                onClick={() => showModal(true, estudiante.idestudiante)}>
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
