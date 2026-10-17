/* eslint-disable react/prop-types -- Technology data comes from the local data module. */
import { Box, Typography } from "@mui/material";

function CardTech({ tecnologias }) {
    const { titulo, tecnologiasData } = tecnologias;
    return (
        <Box className="tech-group">
            <Typography component="h3">{titulo}</Typography>
            <Box className="tech-icons">
                {tecnologiasData.map((item) => (
                    <Box className="tech-icon" key={item.fuente} title={item.titulo}>
                        <img alt={`Icono de ${item.titulo}`} src={item.fuente} loading="lazy" />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default CardTech;
