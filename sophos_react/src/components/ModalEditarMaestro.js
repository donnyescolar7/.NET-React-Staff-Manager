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

export default function ModalEditarMaestro({
  open, setOpenModal, getData,
  idmaestro_editar,
  nombre, setNombre,
  titulo, setTitulo,
  experiencia, setExperiencia
}) {

  const enviarEditarMaestro = async () => {
    if (nombre.length > 0 && titulo.length > 0 && experiencia.toString().length > 0) {
      const maestro = {
        idmaestro: idmaestro_editar,
        nombre: nombre,
        titulo: titulo,
        experiencia: parseInt(experiencia)
      }
      console.log("objecto");
      console.log(maestro);
      try {
        const res = await axios.put(
          constants.api_Maestro_ActualizarMaestro,
          maestro
        )
        console.log(res.data)
        if (res.data === true) {
          setOpenModal(false)
          setNombre("")
          setTitulo("")
          setExperiencia(0)
          getData()
        } else {
          console.log("Error al subir")
        }
      } catch (error) {
        console.log(error)
      }
    } else {
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
              Editar Maestro
            </Typography>
            <TextField fullWidth label="Nombre" id="nombre"
              value={nombre} onChange={(e) => {
                setNombre(e.target.value)
              }} />
            <TextField fullWidth label="Titulo" id="titulo"
              value={titulo} onChange={(e) => {
                setTitulo(e.target.value)
              }} />
            <TextField type="number" fullWidth label="Experiencia" id="experiencia"
              value={experiencia} onChange={(e) => {
                setExperiencia(e.target.value)
              }} />
            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={() => enviarEditarMaestro()}>Actualizar Maestro</Button>
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

