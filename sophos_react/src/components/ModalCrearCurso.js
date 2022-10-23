import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios'
import constants from '../Constants'
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function ModalCrearMaestro({ open, setOpenModalCrear, getData }) {

  const [nombre, setNombre] = useState("");
  const [creditos, setCreditos] = useState(0);
  const [idMaestro, setIdMaestro] = useState(0);
  const [prerrequisito, setPrerrequisito] = useState("");
  const [cupos, setCupos] = useState(0);

  const enviarCrearCurso = async () => {
    if (nombre.length > 0 && creditos.length > 0 && idMaestro.length > 0 
      && prerrequisito.length > 0 && cupos.length > 0) {
      const curso = {
        nombre: nombre,
        creditos: parseInt(creditos),
        idmaestro: parseInt(idMaestro),
        prerrequisito: prerrequisito,
        cupos: parseInt(cupos),
      }
      console.log("objecto");
      console.log(curso);
      try {
        const res = await axios.post(
          constants.api_Maestro_CrearMaestro,
          curso
        )
        console.log(res.data);
        if (res.data === true) {
          setOpenModalCrear(false)
          setNombre("")
          setCreditos(0)
          setIdMaestro(0)
          setPrerrequisito("")
          setCupos(0)
          getData()
        }else{
          console.log("Error al subir");
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpenModalCrear(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h6" component="h2">
              Crear Curso
            </Typography>
            <TextField fullWidth label="Nombre" id="nombre"
              value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <TextField type="number" fullWidth label="Créditos" id="creditos"
              value={creditos} onChange={(e) => setCreditos(e.target.value)} />
            <TextField type="number" fullWidth label="Id Maestro" id="idmaestro"
              value={idMaestro} onChange={(e) => setIdMaestro(e.target.value)} />
              <TextField fullWidth label="Prerrequisito" id="prerrequisito"
              value={prerrequisito} onChange={(e) => setPrerrequisito(e.target.value)} />
              <TextField type="number" fullWidth label="Cupos" id="cupos"
              value={cupos} onChange={(e) => setCupos(e.target.value)} />
            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={() => enviarCrearCurso()}>Agregar Curso</Button>
              <Button color="error" variant="contained"
                onClick={() => {
                  setOpenModalCrear(false)
                  setNombre("")
                  setCreditos(0)
                  setIdMaestro(0)
                  setPrerrequisito("")
                  setCupos(0)
                }
                }
              >Cancelar</Button>
            </Stack>
          </Stack>

        </Box>
      </Modal>
    </div>
  );
}

