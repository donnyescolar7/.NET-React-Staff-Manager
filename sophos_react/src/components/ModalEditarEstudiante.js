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

export default function ModalEditarEstudiante({ 
  open, setOpenModal, getData, 
  idestudiante_editar,
  nombre, setNombre, 
  facultad, setFacultad,
  semestre, setSemestre 
}) {

  /*const [nombre, setNombre] = useState(estudiante.nombre);
  const [facultad, setFacultad] = useState(estudiante.facultad);
  const [semestre, setSemestre] = useState(estudiante.semestre);*/


  const enviarEditarEstudiante = async() => {
    if (nombre.length > 0 && facultad.length > 0 &&  semestre.toString().length > 0) {
      const estudiante = {
        idestudiante: idestudiante_editar,
        nombre: nombre,
        facultad: facultad,
        semestre: parseInt(semestre)
      }
      console.log("objecto");
      console.log(estudiante);
      try {
        const res = await axios.put(
          constants.api_Estudiante_ActualizarEstudiante,
          estudiante
        )
        console.log(res.data)
        if (res.data === true) {
          setOpenModal(false)
          setNombre("")
          setFacultad("")
          setSemestre(0)
          getData()
        }else{
          console.log("Error al subir")
        }
      } catch (error) {
        console.log(error)
      }
    }else{
      console.log("ACAAAAA");
    }

  }

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="column" spacing={2}>
            <Typography variant="h6" component="h2">
              Editar Estudiante
            </Typography>
            <TextField fullWidth label="Nombre" id="nombre"
              value={nombre} onChange={(e) => {
                setNombre(e.target.value)
                }} />
            <TextField fullWidth label="Facultad" id="facultad"
              value={facultad} onChange={(e) => {
                setFacultad(e.target.value)
                }} />
            <TextField type="number" fullWidth label="Semestre" id="semestre"
              value={semestre} onChange={(e) => {
                setSemestre(e.target.value)
                }} />
            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={() => enviarEditarEstudiante()}>Actualizar Estudiante</Button>
              <Button color="error" variant="contained"
                onClick={() => {
                  setOpenModal(false)

                  /*setNombre("")
                  setFacultad("")
                  setSemestre(0)*/
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

