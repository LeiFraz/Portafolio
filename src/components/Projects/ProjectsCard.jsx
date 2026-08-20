import { Box, Button, Typography, Grid2 } from "@mui/material";
//import proyecto from '../../data/projects.js'

function ProjectsCard ({ proyecto })
{
    const {titulo, problema, rol, tecnologias, aprendizaje, links, imagen, imagenAlt} = proyecto;

    return (
        <Box 
            sx={{ 
                //margin: 'auto',
                flexGrow: 1,
                mb:5,
                p:1,
                backgroundColor: '#0B3C5D',
                borderRadius: {xs: 0, sm: '1rem'},
                width: '100%',
                maxWidth: '700px',
                overflow: 'hidden',
        }}>
            <Grid2 container spacing={3}>
                <Grid2 size={{xs: 12, md: 4}} >
                    <img src={imagen} alt={imagenAlt} 
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            borderRadius: 15
                        }}
                    ></img>
                </Grid2>
                <Grid2 size={{xs: 12, md: 8}} 
                    sx={{
                        textAlign: 'left', 
                        display: 'flex', 
                        flexDirection: 'column',
                        gap: 2
                }}>
                    <Typography component="h3" variant="h4">
                        {titulo}
                    </Typography>
                    <Typography component='p' variant="body1">
                        <strong>Problema: </strong>{problema}
                    </Typography>
                    <Typography component='p' variant="body1">
                        <strong>Rol: </strong>{rol}
                    </Typography>
                    <Typography component='p' variant="body1">
                        <strong>Tecnologias: </strong>{tecnologias.join(', ')}
                    </Typography>
                    <Typography component='p' variant="body1">
                        <strong>Aprendizaje: </strong>{aprendizaje}
                    </Typography>
                    <Grid2 container spacing={2} sx={{ justifyContent: 'center'}}>
                        {links.map((item) => (
                            <Grid2 key={item.label} size={{xs: 12, sm: 6, md: 3}}> 
                                <Button href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.ariaLabel} size="small"
                                    sx={{
                                        p: '10px',
                                        color: 'white',
                                        fontWeight: '700',                                        
                                        "&:hover":{color: '#02C8A7', background: '#1d5479'}
                                }}
                                >
                                    Ir a {item.label}
                                </Button>
                            </Grid2>
                        ))}
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )

}

export default ProjectsCard;