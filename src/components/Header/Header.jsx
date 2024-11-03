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
                width: '98.8vw', //por la barra de desplazamiento lateral
                backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)), url(${fondo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <Typography variant="h1" sx={{fontSize: '60px', fontWeight: 'bold'}}>
                    LEONARDO FRANCISCO PAZ
                </Typography>
                <Typography variant="h5">
                    Desarrollador Web FullStack / Project Manager
                </Typography>
            </Box>
        </>
    )
}

export default Header
