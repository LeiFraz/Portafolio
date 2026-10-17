import { Box, Typography } from "@mui/material"
import technology from '../../data/technology.js'
import CardTech from "./CardTech.jsx"

function TechsAndTools() {
    return (
        <Box component="section" id="Tecnologias" className="content-section">
            <Typography component="h2" className="section-title" sx={{fontSize: {xs: '2rem', md: '3rem'}}}>
                TECNOLOGÍAS Y HERRAMIENTAS
            </Typography>
            <Box className="tech-groups">
                {technology.map((item) => (
                    <CardTech key={item.titulo} tecnologias={item} />
                ))}
            </Box>
        </Box>
    )
}

export default TechsAndTools
