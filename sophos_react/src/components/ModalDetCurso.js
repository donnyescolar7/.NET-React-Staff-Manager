import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TablaEstudiantesModal from './TablaEstudiantesModal';

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

export default function ModalDetCurso({open, showModal, curso, estudiantes_lista}) {

  return (
    <div>
      <Modal
        open={open}
        onClose={()=>showModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography  variant="h6" component="h2">
            {curso?.nombre}
          </Typography>
          <Typography  sx={{ mt: 2 }}>
            {curso?.numero_creditos}
          </Typography>
          <Typography  sx={{ mt: 2 }}>
            {curso?.idmaestro}
          </Typography>
          <Typography  sx={{ mt: 2 }}>
            {curso?.nombre_prerrequisito}
          </Typography>
          <TablaEstudiantesModal data={estudiantes_lista} showModal={showModal}/>
        </Box>
      </Modal>
    </div>
  );
}
