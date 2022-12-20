import React from 'react';
import { AiOutlineExpandAlt } from "react-icons/ai";
import styles from "../../styles/projects.module.css";
import Typography from '@mui/material/Typography'

function Project({project}) {

    console.log(project);
  return (
    <>
        <div className={styles.projectContainer}>
            <a
                key={project.id}
                data-lg-size={project.size}
                className="project-image"
                data-src={project.src}
            >
                <img
                    className="img-responsive"
                    src={project.thumb}
                />
                <div className={styles.projectOverlap}>
                    <div className={styles.iconBox}>
                        <AiOutlineExpandAlt color='#000000' size={25} />
                    </div>
                </div>
                <div className={styles.titleOverlap}>
                    <Typography 
                        variant="caption" 
                        color="secondary.main"
                        sx={{
                            fontSize: 18
                        }}
                    >
                        Title
                    </Typography>
                </div>
            </a>
        </div>
    </>
  )
}

export default Project