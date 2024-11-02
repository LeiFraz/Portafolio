import { Box, Typography } from "@mui/material"

function Index () {

    return (
        <>
            <Box id='Inicio' sx={{
                margin: 'auto',
                height: '100vh',
                alignContent: 'center'
            }}>
                <Typography variant="h1" sx={{fontSize: '60px'}}>
                    LEONARDO FRANCISCO PAZ
                </Typography>
                <Typography variant="h5">
                    Desarrollador Web FullStack / Project Manager
                </Typography>
            </Box>
        </>
    )
}

export default Index