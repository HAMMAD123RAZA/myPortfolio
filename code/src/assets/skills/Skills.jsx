import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Grid } from '@mui/material';
import Content from './Content';

const logo = ['html logo.png', 'css.png', 'Js.jfif', 'react logo.jfif', 'mui.jfif', 'bootstrap.jfif','mongo image.jfif','express image.webp'];

const Skills = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS library
    }, []);

    return (
        <div id='skills'>
            <h1 className='text-center text-primary my-5'>Skills</h1>
            <Grid container spacing={2}>
                {logo.map((skill, index) => (
                    <Grid item key={index} sm={4} xs={6}>
                        <div data-aos="flip-down">
                            <Content props={skill} />
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Skills;
