import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const Inicio = () => {

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', p: 2 }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea component={Link} to="/cursos">
            <CardMedia
              component="img"
              height="140"
              width="100"
              image={require("../images/cursos.jpg")}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cursos
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea component={Link} to="/estudiantes">
            <CardMedia
              component="img"
              height="140"
              width="100"
              image={require("../images/estudiantes.jpg")}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Estudiantes
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea component={Link} to="/maestros">
            <CardMedia
              component="img"
              height="140"
              width="100"
              image={require("../images/maestros.jpg")}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Maestros
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );

}

export default Inicio