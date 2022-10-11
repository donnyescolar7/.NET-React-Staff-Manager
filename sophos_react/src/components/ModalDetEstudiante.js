import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TablaCursosModal from './TablaCursosModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function ModalDetEstudiante({open, showModal, cursos_lista}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={()=>showModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TablaCursosModal data={cursos_lista} showModal={showModal}/>
        </Box>
      </Modal>
    </div>
  );
}
