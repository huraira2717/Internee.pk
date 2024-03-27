import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Data } from './Data.js'

export default function MediaCard() {
  return (
    <>
      <Grid container sx={{ margin: '30px auto', width: '95%', marginTop: "110px", marginRight: "3px" }}>
      <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontWeight:'bold'}}>
            Recent Internship
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Grid>

      <Grid container sx={{ margin: '30px auto', width: '95%', cursor: "pointer" }} columnSpacing={3} rowSpacing={3} justifyContent="center">
        {Data.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ '&:hover': { boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', transition: 'box-shadow 0.3s' } }}>
              <CardMedia
                sx={{ height: 220 }}
                image={item.img}
                title="Internship Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.Name}
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', color: "green" }}>
                  <AccessTimeIcon sx={{ marginRight: '5px' }} /> <Typography>{item.Month}</Typography>
                  <LocationOnIcon sx={{ marginRight: '5px' }} /> <Typography>{item.Duration}</Typography>
                </div>
              </CardContent>
              <CardActions>
                <Button sx={{ borderRadius: "20px", textAlign: 'left' }} variant="contained" color="success" size="large">Apply</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}