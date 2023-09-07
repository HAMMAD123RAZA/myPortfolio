import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.css';
import { Height } from '@mui/icons-material';


const About = () => {
  return (
    <>

      <Grid container spacing={1} className='my-5' id='about'>
        <Grid item xs={12} sm={6} lg={6}>
          <h3 variant='h5' className='mt-3'  >Hello,</h3>
          <h3 variant='h4' className='text-primary mt-3' >Im Hammad Raza</h3>
          <h3 variant='h5' className='mt-3' >Frontend Developer</h3>

          <h5 variant='paragaraph' className='w-75 mt-3'>A passionate frontend developer in the making,Although my journey began without any formal experience.  I've embarked on a path of constant learning and growth in the world of web development.
          </h5>

        </Grid>

        {/* img sec/// */}
        <Grid item xs={12} sm={6} lg={6}>
          <img src="myImg.png" alt="" className='rounded-circle ' style={{ width: '18rem', height: '18rem' }} />

        </Grid>
      </Grid>
    </>
  )
}

export default About