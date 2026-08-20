import { Box, Typography } from "@mui/material"
import technology from '../../data/technology.js'
import CardTech from "./CardTech.jsx"

function TechsAndTools() {

    return(
        <>
            <Box id='Tecnologias' sx={{
                width: '100%',
                maxWidth: '750px',
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: '5rem',
                pb: '5rem',
            }}>
                <Typography variant="h2" sx={{
                    fontSize: {xs: '1.6rem', sm: '2rem' , md: '3rem'},
                    pb: '1.3rem', 
                    fontWeight: 'bold',
                    mb: '30px'
                }}> 
                        TECNOLOGÍAS Y HERRAMIENTAS 
                </Typography>
                
                    { technology.map((item) => (
                        <CardTech key={item.titulo} tecnologias={item}>
                        </CardTech>
                    ))}
            </Box>
        </>
    )
}

export default TechsAndTools