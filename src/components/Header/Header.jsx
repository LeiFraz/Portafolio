import { Box, Typography } from "@mui/material"
import fondo from '../../assets/tumblr_static_space_rocker.jpg';

function Header() {

    return(
        <Box id='Inicio' component="header" className="hero" sx={{
            backgroundImage: `linear-gradient(90deg, rgba(6, 27, 43, .92), rgba(6, 27, 43, .36)), url(${fondo})`,
        }}>
            <Box className="hero-content">
                <Typography component="h1" className="hero-name" sx={{fontSize: {xs: 'clamp(2.6rem, 11vw, 4.5rem)', md: 'clamp(4.5rem, 7vw, 7rem)'}, fontWeight: 700}}>
                    LEONARDO FRANCISCO PAZ
                </Typography>
                <Typography component='p' className="hero-role" sx={{fontSize: {xs:'1.1rem', md: '1.45rem'}}}>
                    Desarrollador Full Stack con enfoque en gestión de proyectos
                </Typography>
            </Box>
        </Box>
    )
}

export default Header
