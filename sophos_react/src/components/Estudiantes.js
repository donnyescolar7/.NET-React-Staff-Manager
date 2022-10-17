import React, { useEffect, useState } from 'react'
import axios from 'axios'
import constants from '../Constants'
import { Button } from '@mui/material'
import TablaEstudiantes from './TablaEstudiantes'
import ModalDetEstudiante from './ModalDetEstudiante'
import ModalCrearEstudiante from './ModalCrearEstudiante'
import ModalEditarEstudiante from './ModalEditarEstudiante'

const Estudiantes = () => {

  const [cursos_lista, setLista] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const [lista_modal, setListaModal] = useState(null)
  const [openModalCrear, setOpenModalCrear] = useState(false)

  const [idestudiante_editar, setIdEstudianteEditar] = useState(0)
  const [nombre_editar, setNombreEditar] = useState("")
  const [facultad_editar, setFacultadEditar] = useState("")
  const [semestre_editar, setSemestreEditar] = useState(0)
  const [openModalEditar, setOpenModalEditar] = useState(false)

  useEffect(() => {
    getData()
  }, [])

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
    if (open) {
      try {
        const res = await axios.get(constants.api_cursos_por_estudiante + idestudiante)
        console.log(res);
        setListaModal(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    setOpenModal(open)
  }

  const showModalActualizar = async (estudiante) => {
    setIdEstudianteEditar(estudiante.idestudiante)
    setNombreEditar(estudiante.nombre)
    setFacultadEditar(estudiante.facultad)
    setSemestreEditar(estudiante.semestre)
    setOpenModalEditar(true)
  }

  return (
    <div>
      <h2>Estudiantes</h2>
      <Button variant="contained" onClick={() => setOpenModalCrear(true)}>Agregar Estudiante</Button>
      <TablaEstudiantes
        data={cursos_lista} showModal={showModal}
        showModalActualizar={showModalActualizar}
      />
      <ModalDetEstudiante open={openModal} showModal={showModal} cursos_lista={lista_modal} />
      <ModalCrearEstudiante open={openModalCrear} setOpenModalCrear={setOpenModalCrear} getData={getData} />
      <ModalEditarEstudiante 
        open={openModalEditar} setOpenModal={setOpenModalEditar} getData={getData}
        idestudiante_editar={idestudiante_editar}
        nombre={nombre_editar} setNombre={setNombreEditar}
        facultad={facultad_editar} setFacultad={setFacultadEditar}
        semestre={semestre_editar} setSemestre={setSemestreEditar}
      />
    </div>
  );

}

export default Estudiantes