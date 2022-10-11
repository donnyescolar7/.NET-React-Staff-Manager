import React, { useEffect, useState } from 'react'
import axios from 'axios'
import constants from '../Constants'
import { Button } from '@mui/material'
import BasicModal from './ModalDetalles'
import TablaEstudiantes from './TablaEstudiantes'

const Estudiantes = () => {

  const [cursos_lista, setLista] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [curso_modal, setCursoModal] = useState(null)

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    try {
      const res = await axios.get(constants.api_estudiante)
      console.log(res);
      setLista(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const showModal = (open, curso) => {
    setOpenModal(open)
    setCursoModal(curso)
  }

  return (
    <div>
      <h2>Estudiantes</h2>
      <Button variant="contained">Agregar Estudiante</Button>
      <TablaEstudiantes data={cursos_lista} showModal={showModal}/>
      <BasicModal open={openModal} showModal={showModal} curso={curso_modal}/>
    </div>
  );

}

export default Estudiantes