import { Avatar, Box, Button, Typography } from "@mui/material"
import linkedin from '../../assets/TechIcons/linkedin-icon-logo.webp'
import github from '../../assets/TechIcons/github9775-2427096616.webp'

function AboutMe() {

    const cvUrl = `${import.meta.env.BASE_URL}CV/CV_Leonardo_Paz_FullStack_y_PM.pdf`;

    return(
        <>
            <Box id='SobreMi' sx={{
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100vh',
                pt: '138px',
                maxWidth: '700px',
                width: '100vw',
                
            }}>
                <Typography variant="h2" sx={{
                        fontSize: '45px',
                        pb: '20px',
                        fontWeight: 'bold'
                    }}> 
                        SOBRE MI 
                    </Typography>
                <Box sx={{
                    mb: '30px',
                    maxWidth: '700px',
                    backgroundColor: '#0B3C5D',
                    borderRadius: '10px',
                    p: '15px 20px',
                    display: "flex",
                    flexDirection: "column",
                    gap: '1rem',
                }}>
                    <Typography variant="h6">Perfil</Typography>
                    <Typography component="p" variant="body1"> 
                    Soy desarrollador Full Stack con formación universitaria en Informática y experiencia en desarrollo web, análisis funcional y coordinación de proyectos tecnológicos.
                    </Typography>

                    <Typography variant="h6">Experiencia técnica</Typography>
                    <Typography component="p" variant="body1"> 
                        A lo largo de distintos proyectos y experiencias laborales trabajé tanto en frontend como backend, utilizando tecnologías como React.js, JavaScript, Node.js, Express, APIs REST y bases de datos. También participé en análisis de requerimientos, integraciones entre sistemas, automatización de procesos, resolución de incidencias y documentación de soluciones. 
                    </Typography>

                    <Typography variant="h6">Gestión y trabajo en equipo</Typography>
                    <Typography component="p" variant="body1">
                        Mi experiencia como Analista Funcional y Project Manager me permitió complementar el desarrollo técnico con organización, comunicación y seguimiento de proyectos, trabajando junto a clientes y equipos de desarrollo, UX/UI y testing bajo metodologías ágiles como Scrum.
                    </Typography>

                    <Typography variant="h6">Forma de trabajar</Typography>
                    <Typography component="p" variant="body1">
                        Me considero una persona organizada, responsable y perseverante. Me adapto con facilidad a nuevas herramientas y formas de trabajo, y valoro mantener una buena comunicación y un ambiente de trabajo colaborativo.
                    </Typography>

                    <Typography variant="h6">Objetivo profesional</Typography>
                    <Typography component="p" variant="body1">
                        Mi objetivo es continuar desarrollándome profesionalmente dentro del sector tecnológico, participando en proyectos donde pueda aportar mis conocimientos, asumir nuevos desafíos y seguir ampliando mi experiencia.  
                    </Typography>
                </Box>

                <Box sx={{pb: '50px'}}>
                    <Button href={cvUrl} download aria-label="Descargar CV"> 
                        <Avatar sx={{
                            width: '55px',
                            height: '55px',
                            backgroundColor: '#062F4F',
                            transition: 'box-shadow 0.3s ease-in-out',
                            '&:hover': { boxShadow: '0px 0px 5px #02C8A7'},
                        }}>CV</Avatar>
                    </Button>
                    <Button href="https://www.linkedin.com/in/leonardofpaz/" target="_blank" rel="noopener noreferrer" aria-label="Abrir mi perfil Linkedin"> 
                        <Avatar src={linkedin} sx={{
                            width: '55px',
                            height: '55px',
                            transition: 'box-shadow 0.3s ease-in-out',
                            '&:hover': { boxShadow: '0px 0px 5px #02C8A7'},
                        }}/>
                    </Button>
                    <Button href="https://github.com/LeiFraz" target="_blank" rel="noopener noreferrer" aria-label="Abrir mi perfil Github"> 
                        <Avatar src={github} sx={{
                            width: '55px',
                            height: '55px',
                            transition: 'box-shadow 0.3s ease-in-out',
                            '&:hover': { boxShadow: '0px 0px 5px #02C8A7'},
                        }}/>
                        {/* src\assets\github9775-2427096616.jpg | src/assets/GitHub.png*/}
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default AboutMe