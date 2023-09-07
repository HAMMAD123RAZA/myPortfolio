import React, { useState } from 'react';
import{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Button, Grid, Modal } from '@mui/material';
import Data from './Data';
import { useNavigate } from 'react-router-dom';
import ProjectDetails from './ProjectDetails'; 
const Project = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
}, []);

  
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };
  
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id='project'>
      <h1 className='text-primary  my-5 '>Projects</h1>
      <Grid container spacing={8}>
        {Data.map((el) => (
          <Grid item xs={12} sm={6} key={el.title}>
            <div data-aos="fade-down-left">

            <div className='card' style={{ width: '16rem' }}>
              <img className='card-img-top' src={el.image}  style={{ height: el.height }}  alt='Card cap' />
              <div className='card-body'>
                <h5 className='card-title text-primary'>{el.title}</h5>
                <p className='card-text'>{el.technologies}</p>
                <Button variant='contained' onClick={() => openModal(el)}>Details</Button>
              </div>
            </div>
            </div>

          </Grid>
        ))}
      </Grid>

      <Modal open={!!selectedProject} onClose={closeModal}   aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
        <div>
          {/* Render ProjectDetails component if a project is selected */}
          {selectedProject && (
            <ProjectDetails project={selectedProject} onClose={closeModal} />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Project;
