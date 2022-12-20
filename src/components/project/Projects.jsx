import { Box, Typography, Grid } from '@mui/material';
import lgVideo from 'lightgallery/plugins/video';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
import React from 'react';
import { projectContainer } from '../../themes/commonStyles';
import { data } from './data';
import Project from './Project';


function Projects() {

    let content = '';

    content = data.map( (project, index) => (
        <Project project={project} key={project.id} />
    ))


  return (
    <>
        <Box
            sx={{
                backgroundColor: 'primary.main',
                py: 5
            }}
        >
            <Typography 
                variant="h2" 
                color="primary.optional"
                sx={{
                    textAlign: 'center',
                    py: 2
                }}
            >
                PROJECT PHOTOS
            </Typography>

            <Box>
                <LightGallery
                    selector={'.project-image'}
                    plugins={[lgVideo, lgZoom]}
                    elementClassNames="project-container"
                >
                    {content}
                </LightGallery>
            </Box>

            

            
        </Box>
    </>
  )
}

export default Projects