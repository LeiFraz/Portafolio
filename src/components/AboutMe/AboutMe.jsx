import { Avatar, Box, Button, Typography } from "@mui/material"
import linkedin from '../../assets/TechIcons/linkedin-icon-logo.webp'
import github from '../../assets/TechIcons/github9775-2427096616.webp'

function AboutMe() {

    const cvUrl = `${import.meta.env.BASE_URL}CV/CV_Leonardo_Paz_FullStack_y_PM.pdf`;

    return(
            <Box component="section" id='SobreMi' className="content-section">
                <Typography component="h2" className="section-title" sx={{fontSize: {xs: '2rem', md: '3rem'}}}>
                        SOBRE MI 
                </Typography>
                <Box className="about-grid">
                    <Typography component="p" className="about-lead">
                    Soy desarrollador Full Stack con formación universitaria en Informática y experiencia en desarrollo web, análisis funcional y coordinación de proyectos tecnológicos.
                    </Typography>
                    <Box className="about-details">
                    <Box><Typography component="h3">Experiencia técnica</Typography>
                    <Typography component="p">
                        A lo largo de distintos proyectos y experiencias laborales trabajé tanto en frontend como backend, utilizando tecnologías como React.js, JavaScript, Node.js, Express, APIs REST y bases de datos. También participé en análisis de requerimientos, integraciones entre sistemas, automatización de procesos, resolución de incidencias y documentación de soluciones. 
                    </Typography></Box>

                    <Box><Typography component="h3">Gestión y trabajo en equipo</Typography>
                    <Typography component="p">
                        Mi experiencia como Analista Funcional y Project Manager me permitió complementar el desarrollo técnico con organización, comunicación y seguimiento de proyectos, trabajando junto a clientes y equipos de desarrollo, UX/UI y testing bajo metodologías ágiles como Scrum.
                    </Typography></Box>

                    <Box><Typography component="h3">Forma de trabajar</Typography>
                    <Typography component="p">
                        Me considero una persona organizada, responsable y perseverante. Me adapto con facilidad a nuevas herramientas y formas de trabajo, y valoro mantener una buena comunicación y un ambiente de trabajo colaborativo.
                    </Typography></Box>

                    <Box><Typography component="h3">Objetivo profesional</Typography>
                    <Typography component="p">
                        Mi objetivo es continuar desarrollándome profesionalmente dentro del sector tecnológico, participando en proyectos donde pueda aportar mis conocimientos, asumir nuevos desafíos y seguir ampliando mi experiencia.  
                    </Typography></Box>
                    </Box>
                </Box>

                <Box className="social-links">
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
                    </Button>
                </Box>
            </Box>
    )
}

export default AboutMe
