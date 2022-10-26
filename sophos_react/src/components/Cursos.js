import React, { useEffect, useState } from 'react'
import axios from 'axios'
import constants from '../Constants'
import TablaCursos from './TablaCursos'
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ModalDetCurso from './ModalDetCurso'
import ModalCrearCurso from './ModalCrearCurso'

const Cursos = () => {

  const [cursos_lista, setLista] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [curso_modal, setCursoModal] = useState(null)
  const [openModalCrear, setOpenModalCrear] = useState(false)

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    getData()
  }, [])

  const getData = async (filtered, nombre) => {
    try {
      const res = nombre != undefined ? 
      await axios.get(constants.api_curso_por_nombre + "/"+nombre)
      :
      filtered ?  
      await axios.get(constants.api_curso_solo_disponibles)
      :
      await axios.get(constants.api_curso)
      console.log(res);
      setLista(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const showModal = async (open, curso) => {
    /*console.log(curso)
    if(open){
      try {
        const res = await axios.get(constants.api_estudiantes_por_curso+curso.idcurso)
        console.log(res);
        setListaModal(res.data)
      } catch (error) {
        console.log(error)
      }
    }*/
    setOpenModal(open)
    setCursoModal(curso)
  }

  const deleteItem = async (curso) => {
    console.log(curso)
    try {
      const res = await axios.delete(constants.api_Curso_Eliminar + curso.idcurso)
      console.log(res.data);
      getData()
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setChecked(event.target.checked);
    getData(event.target.checked)
  };

  return (
    <div>
      <h2>Cursos</h2>
      <Button variant="contained" onClick={() => setOpenModalCrear(true)}>Crear Curso</Button>
      <Button variant="contained" onClick={() => getData(false, "filo")}>Buscar</Button>
      <FormGroup>
        <FormControlLabel control={
          <Checkbox
            label="Locura"
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        } label="Solo cursos con cupos disponibles"/>
      </FormGroup>
      <TablaCursos data={cursos_lista} showModal={showModal} deleteItem={deleteItem} />
      {curso_modal == undefined ? <></> : <ModalDetCurso open={openModal} showModal={showModal} curso={curso_modal} />}
      <ModalCrearCurso open={openModalCrear} setOpenModalCrear={setOpenModalCrear} />
    </div>
  );

}

export default Cursos