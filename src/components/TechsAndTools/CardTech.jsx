import { Avatar, Box, Grid2, Typography } from "@mui/material";


function CardTech ({tecnologias}) {
    const {titulo, tecnologiasData} = tecnologias;
    return(
        <>
            <Box sx={{
                mb: '2rem',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                gap: 3,
                width: { xs: '100%' },
                maxWidth: '700px',
                overflow: 'hidden',
                backgroundColor: '#0B3C5D',
                borderRadius: { xs: 0, sm: '1rem' },
                p: '1rem',
            }}>
                <Typography component='h4' variant='h4'>
                        {titulo}
                </Typography>
                <Grid2 container spacing={2} sx={{justifyContent: 'center'}}>
                    {tecnologiasData.map((item) => (
                        <Grid2 key={item.titulo}
                        size={{xs: 2, sm: 1}}
                        >
                            <Avatar alt={`Icono de ${item.titulo}`} src={item.fuente}></Avatar>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </>
    )
}

export default CardTech;