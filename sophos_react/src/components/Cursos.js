import React, { useEffect, useState } from 'react'
import axios from 'axios'
import constants from '../Constants'
import TablaCursos from './TablaCursos'
import { Button } from '@mui/material'
import ModalDetCurso from './ModalDetCurso'

const Cursos = () => {

  const [cursos_lista, setLista] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [curso_modal, setCursoModal] = useState(null)
  const [estudiantes_lista, setListaModal] = useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    try {
      const res = await axios.get(constants.api_curso)
      console.log(res);
      setLista(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const showModal = async(open, curso) => {
    console.log(curso)
    if(open){
      try {
        const res = await axios.get(constants.api_estudiantes_por_curso+curso.idcurso)
        console.log(res);
        setListaModal(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    setOpenModal(open)
    setCursoModal(curso)
  }

  return (
    <div>
      <h2>Cursos</h2>
      <Button variant="contained">Crear Curso</Button>
      <TablaCursos data={cursos_lista} showModal={showModal}/>
      <ModalDetCurso open={openModal} showModal={showModal} curso={curso_modal} estudiantes_lista={estudiantes_lista}/>
    </div>
  );

}

export default Cursos