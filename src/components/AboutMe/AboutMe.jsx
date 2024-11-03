import { Avatar, Box, Button, Typography } from "@mui/material"


function AboutMe() {

    return(
        <>
            <Box id='SobreMi' sx={{
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // height: '100vh',
                pt: '138px',
                // maxWidth: '700px',
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
                }}>
                    <Typography variant="p"> 
                    Soy estudiante de Licenciatura en Informática y Analista Programador Universitario. Cuento con una sólida formación en Frontend y Backend, manejo diversos lenguajes y he trabajado con metodologías ágiles como SCRUM y RUP.<br></br><br></br>
                    Me destaco por ser organizado, perseverante, responsable y simpático, por lo que siempre contribuyo en formar un excelente ambiente laboral. También a través de proyectos académicos y de un voluntariado como PM jr., he desarrollado otras habilidades como la gestión del tiempo, liderazgo y comunicación.
                    Actualmente, me estoy capacitando como Desarrollador FullStack con la Fundación Pescar, buscando no solo aplicar mis habilidades, sino también seguir aprendiendo y creciendo en otras áreas técnicas. <br></br><br></br> 
                    Mi Principal objetivo es integrarme en un equipo donde pueda aportar mis conocimientos y continuar mi desarrollo profesional.
                    </Typography>
                </Box>

                <Box sx={{pb: '50px'}}>
                    <Button href="src\assets\CV\CV Paz Leonardo.pdf" download> 
                        <Avatar sx={{
                            width: '55px',
                            height: '55px',
                            backgroundColor: '#062F4F',
                            transition: 'box-shadow 0.3s ease-in-out',
                            '&:hover': { boxShadow: '0px 0px 5px #02C8A7'},
                        }}>CV</Avatar>
                    </Button>
                    <Button href="https://www.linkedin.com/in/leonardofpaz/" target="_blank"> 
                        <Avatar src="src\assets\TechIcons\linkedin-icon-logo.png" sx={{
                            width: '55px',
                            height: '55px',
                            transition: 'box-shadow 0.3s ease-in-out',
                            '&:hover': { boxShadow: '0px 0px 5px #02C8A7'},
                        }}/>
                    </Button>
                    <Button href="https://github.com/LeiFraz" target="_blank"> 
                        <Avatar src="src\assets\TechIcons\github9775-2427096616.jpg" sx={{
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