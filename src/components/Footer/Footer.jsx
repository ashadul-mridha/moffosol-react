import { Box, Typography } from '@mui/material'
import React from 'react'
import { dFlex } from '../../themes/commonStyles'
import collobration from "../../assets/collaboration.png"

function Footer() {
  return (
    <>
        <Box
            sx={{
                backgroundColor: 'primary.main',
                ...dFlex,
                flexDirection: 'column',
                pb: 2
            }}
        >
            <Typography variant="subtitle1" color="primary.optional">This project was initiated by Drik Picture Library Ltd. </Typography>
            <Typography sx={{ py: 1}}  variant="subtitle2" color="primary.optional">in collaboration with</Typography>
            <img src={collobration} width="400px" height="auto" />
            <Typography sx={{ py: 1}}  variant="subtitle2" color="primary.optional">Copyright © 2022 All rights reserved Drik</Typography>
            <Typography variant="subtitle2" color="primary.optional">Email: research@drik.net</Typography>
        </Box>
    </>
  )
}

export default Footer