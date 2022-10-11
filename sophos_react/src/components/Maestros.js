import React, { useEffect, useState } from 'react'
import axios from 'axios'
import constants from '../Constants'
import { Button } from '@mui/material'
import ModalDetCurso from './ModalDetCurso'
import TablaMaestros from './TablaMaestros'
import ModalDetEstudiante from './ModalDetEstudiante'

const Maestros = () => {

  const [maestros_lista, setLista] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [curso_modal, setCursoModal] = useState(null)
  const [cursos_lista, setListaModal] = useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    try {
      const res = await axios.get(constants.api_maestros)
      console.log(res);
      setLista(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const showModal = async (open, idmaestro) => {
    console.log("Maestro: "+idmaestro);
    if(open){
      try {
        const res = await axios.get(constants.api_cursos_por_maestro + idmaestro)
        console.log(res);
        setListaModal(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    setOpenModal(open)
  }

  return (
    <div>
      <h2>Maestros</h2>
      <Button variant="contained">Agregar Maestro</Button>
      <TablaMaestros data={maestros_lista} showModal={showModal}/>
      <ModalDetEstudiante open={openModal} showModal={showModal} curso={curso_modal} cursos_lista={cursos_lista}/>
    </div>
  );

}

export default Maestros