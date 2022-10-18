import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import { Delete, Edit, FormatListBulleted } from '@mui/icons-material';

export default function TablaMaestros({ data, showModal, showModalActualizar, deleteItem }) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><strong>id</strong></TableCell>
            <TableCell align="center"><strong>Nombre</strong></TableCell>
            <TableCell align="center"><strong>Titulo</strong></TableCell>
            <TableCell align="center"><strong>Experiencia</strong></TableCell>
            <TableCell align="center"><strong>Cursos</strong></TableCell>
            <TableCell align="center"><strong>Editar</strong></TableCell>
            <TableCell align="center"><strong>Eliminar</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((maestro) => (
            <TableRow
              key={maestro.idmaestro}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{maestro.idmaestro}</TableCell>
              <TableCell align="center" component="th" scope="row">
                {maestro.nombre}
              </TableCell>
              <TableCell align="center">{maestro.titulo}</TableCell>
              <TableCell align="center">{maestro.experiencia}</TableCell>
              <TableCell align="center">
                <IconButton color="primary" aria-label="upload picture" component="label"
                onClick={() => showModal(true, maestro.idmaestro)}>
                  <FormatListBulleted/>
                </IconButton>
              </TableCell>
              <TableCell align="center">
                <IconButton color="primary" aria-label="upload picture" component="label"
                  onClick={() => {
                    showModalActualizar(maestro)
                  }}>
                  <Edit />
                </IconButton>
              </TableCell>
              <TableCell align="center">
                <IconButton color="primary" aria-label="upload picture" component="label"
                onClick={() => deleteItem(maestro)}>
                  <Delete/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
