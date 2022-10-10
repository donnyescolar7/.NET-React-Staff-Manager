import React, { useEffect, useState } from 'react'
import axios from 'axios'
import constants from '../Constants'
import TablaCursos from './TablaCursos'
import { Button } from '@mui/material'

const Cursos = () => {

  const [cursos_lista, setLista] = useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    try {
      const res = await axios.get(constants.api_url)
      console.log(res);
      //setUser(res.data.results[0])
      setLista(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Cursos</h2>
      <Button variant="contained">Crear Curso</Button>
      <TablaCursos data={cursos_lista}/>
    </div>
  );

}

export default Cursos