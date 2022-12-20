import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import aboutImage from "../../assets/about.jpg";

function OralHistory() {
  return (
    <>
        <Box
            sx={{
                backgroundColor: 'primary.main',
            }}
        >
            <Container  maxWidth="lg">
                <Grid 
                    container 
                    spacing={2}
                    sx={{
                        py: 5
                    }}
                >
                    <Grid item sm={12} lg={6}>
                        <Typography 
                            variant="h3" 
                            color="primary.optional"
                            sx={{
                                py: 2
                            }}
                        >
                            ORAL HISTORY PROJECT MOFUSSIL PHOTOGRAPHY
                        </Typography>
                        <Typography 
                            variant="caption"
                            color="primary.optional"
                        >
                            Although photography as a science, technology, art and practice has a history longer than a century in Bangladesh, as a visual-cultural tradition it has not been recognised. In this context, Drik Picture Library in collaboration with Prince Claus Fund for Culture and Development and Pathshala – South Asian Media Institute has taken an initiative to document this tradition with a particular focus on history of mofussil (small town) photography in Bangladesh.
                        </Typography>
                    </Grid>
                    <Grid item sm={12} lg={6}>
                        <img src={aboutImage} alt="" width="100%" height="350px" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
  )
}

export default OralHistory