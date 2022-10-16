import React, { useEffect, useState } from 'react'
import axios from 'axios'
import constants from '../Constants'
import { Button } from '@mui/material'
import TablaEstudiantes from './TablaEstudiantes'
import ModalDetEstudiante from './ModalDetEstudiante'
import ModalCrearEstudiante from './ModalCrearEstudiante'

const Estudiantes = () => {

  const [cursos_lista, setLista] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [lista_modal, setListaModal] = useState(null)
  const [openModalCrear, setOpenModalCrear] = useState(false)

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

  const showModal = async (open, idestudiante) => {
    if(open){
      try {
        const res = await axios.get(constants.api_cursos_por_estudiante+idestudiante)
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
      <h2>Estudiantes</h2>
      <Button variant="contained" onClick={()=>setOpenModalCrear(true)}>Agregar Estudiante</Button>
      <TablaEstudiantes data={cursos_lista} showModal={showModal}/>
      <ModalDetEstudiante open={openModal} showModal={showModal} cursos_lista={lista_modal}/>
      <ModalCrearEstudiante open={openModalCrear} setOpenModalCrear={setOpenModalCrear} getData={getData}/>
    </div>
  );

}

export default Estudiantes