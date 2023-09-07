import { Button } from '@mui/material';
import React from 'react';

const ProjectDetails = ({ project, onClose }) => {
  return (
    <div className='text-center w-50 bg-light mx-5 my-5'>
      <h2 className='mb-3 mt-1 text-primary'>{project.title}</h2>
      <p className='text-danger'>{project.technologies}</p>
      <p className='text-danger'>{project.desc}</p>

      {/* Add other project details here */}
      <Button className='my-3 ' variant='contained' onClick={onClose}>Close</Button>
    </div>
  );
};

export default ProjectDetails;
