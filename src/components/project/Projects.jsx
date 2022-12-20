import { Box, Typography } from '@mui/material';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-medium-zoom.css';
import 'lightgallery/css/lg-rotate.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import lgFullScreen from 'lightgallery/plugins/fullscreen';
import lgRotate from 'lightgallery/plugins/rotate';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
import React from 'react';
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
                    plugins={[lgThumbnail, lgZoom, lgRotate, lgFullScreen]}
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