import React, { useEffect, useState } from 'react'
import axios from 'axios'
import constants from '../Constants'
import { Button } from '@mui/material'
import TablaMaestros from './TablaMaestros'
import ModalDetEstudiante from './ModalDetEstudiante'
import ModalCrearMaestro from './ModalCrearMaestro'
import ModalEditarMaestro from './ModalEditarMaestro'

const Maestros = () => {

  const [maestros_lista, setLista] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [curso_modal, setCursoModal] = useState(null)
  const [cursos_lista, setListaModal] = useState([])

  const [openModalCrear, setOpenModalCrear] = useState(false)

  const [idmaestro_editar, setIdMaestroEditar] = useState(0)
  const [nombre_editar, setNombreEditar] = useState("")
  const [titulo_editar, setTituloEditar] = useState("")
  const [experiencia_editar, setExperienciaEditar] = useState(0)
  const [openModalEditar, setOpenModalEditar] = useState(false)

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

  const showModalActualizar = async (maestro) => {
    setIdMaestroEditar(maestro.idmaestro)
    setNombreEditar(maestro.nombre)
    setTituloEditar(maestro.titulo)
    setExperienciaEditar(maestro.experiencia)
    setOpenModalEditar(true)
  }

  const deleteItem = async(maestro) => {
    console.log(maestro)
    try {
      const res = await axios.delete(constants.api_Maestro_Eliminar+maestro.idmaestro)
      console.log(res.data);
      getData()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Maestros</h2>
      <Button variant="contained" onClick={()=>setOpenModalCrear(true)}>Agregar Maestro</Button>
      <TablaMaestros 
        data={maestros_lista} showModal={showModal}
        showModalActualizar={showModalActualizar}
        deleteItem={deleteItem}
      />
      <ModalDetEstudiante open={openModal} showModal={showModal} curso={curso_modal} cursos_lista={cursos_lista}/>
      <ModalCrearMaestro open={openModalCrear} setOpenModalCrear={setOpenModalCrear} getData={getData}/>
      <ModalEditarMaestro
        open={openModalEditar} setOpenModal={setOpenModalEditar} getData={getData}
        idmaestro_editar={idmaestro_editar}
        nombre={nombre_editar} setNombre={setNombreEditar}
        titulo={titulo_editar} setTitulo={setTituloEditar}
        experiencia={experiencia_editar} setExperiencia={setExperienciaEditar}
      />
    </div>
  );

}

export default Maestros