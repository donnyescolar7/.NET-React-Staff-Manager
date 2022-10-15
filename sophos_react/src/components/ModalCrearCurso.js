import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TablaEstudiantesModal from './TablaEstudiantesModal';
import axios from 'axios'
import constants from '../Constants'
import TextField from '@mui/material/TextField';

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

export default function ModalCrearCurso({ open, setOpenModalCrearCurso }) {

  /*const [estudiantes_lista, setLista] = useState([])

  useEffect(()=>{
    loadData()
  },[])

  const loadData = async () => {
    console.log(curso)
    try {
      const res = await axios.get(constants.api_estudiantes_por_curso + curso.idcurso)
      console.log(res);
      setLista(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const actualizarLista = async (idesudiante, inscritoValue) => {
    console.log(curso)
    console.log("Idestudi"+idesudiante);
    try {
      const req = inscritoValue ? 
      constants.api_Agregar_RCursoEstudiante + curso.idcurso+"/"+idesudiante 
      :
      constants.api_Eliminar_RCursoEstudiante + curso.idcurso+"/"+idesudiante

      const res = await axios.post(req)
      console.log(res.data);
      if(res.data){
        estudiantes_lista[estudiantes_lista.findIndex((e) => e.idestudiante === idesudiante)].esta_en_curso = inscritoValue
        setLista([...estudiantes_lista])
      }

    } catch (error) {
      console.log(error)
    }
    
  }*/

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpenModalCrearCurso(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Crear Curso
          </Typography>
          <TextField fullWidth label="fullWidth" id="fullWidth" />
        </Box>
      </Modal>
    </div>
  );
}
