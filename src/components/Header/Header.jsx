import { Box, Typography } from "@mui/material"
import fondo from '../../assets/tumblr_static_space_rocker.jpg';

function Header() {

    return(
        <>
            <Box id='Inicio' sx={{
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)), url(${fondo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <Typography variant="h1" sx={{fontSize: {xs: '2.3rem', sm: '3rem' , md: '4rem'}, fontWeight: 'bold'}}>
                    LEONARDO FRANCISCO PAZ
                </Typography>
                <Typography component='p' variant="body1" sx={{fontSize: {xs:'1rem' ,sm:'1.2rem' , md: '1.5rem'}}}>
                    Desarrollador Full Stack con enfoque en gestión de proyectos
                </Typography>
            </Box>
        </>
    )
}

export default Header
