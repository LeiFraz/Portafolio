import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import semillero from '../../assets/Projects/Semillero.webp'
import fishseason from '../../assets/Projects/FishSeason.webp'
import propmanager from '../../assets/Projects/PropManager.webp'

function Projects() {

    return(
        <>
            <Box id='Proyectos' 
                sx={{
                    margin: 'auto',
                    pt: '138px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'left',
                    // height: '100vh',
            }}>
                <Typography variant="h2" 
                    sx={{
                        fontSize: '35px',
                        fontWeight: 'bold',
                        mb: '30px'
                }}> 
                    PROJECTS
                </Typography>
    {/* SEMILLERO DE QUINTO IMPACTO */}
                <Card 
                    sx={{
                        mb: '30px',
                        backgroundColor: '#0B3C5D',
                        display: 'flex',
                        minWidth: '550px',
                        minHeight: '180px',
                        maxHeight: '320px',
                        maxWidth: '1000px',
                        borderRadius: '10px',
                }}>
                    <CardMedia 
                        component='img'
                        image={semillero}
                        alt="Imagen del proyecto"
                        sx={{
                            width: '200px',
                            borderRadius: '10px',
                        }}
                    />
                    <Box 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            p: '0px 10px'
                    }}>
                        <CardContent 
                            sx={{color: 'white', display: 'flex', flexDirection:'column', gap: 1

                        }}>
                            <Typography variant="h3" 
                                sx={{
                                    fontSize: '25px',
                                    mb: '20px',
                            }}> 
                                Ubuntu - Semillero de Quinto Impacto 
                            </Typography>
                            <Box 
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1.5
                            }}>
                                <Typography component='p' variant="body1"> <strong>Problema:</strong> Página web destinada a impulsar el crecimiento de microemprendimientos, brindándoles oportunidades de financiamiento y mayor visibilidad. </Typography>
                                <Typography component='p' variant="body1"> <strong>Rol:</strong> Estuve como Desarrollador Frontend realizando los dashboards, formularios y la página principal. </Typography>
                                <Typography component='p' variant="body1"> <strong>Tecnologias:</strong> Utilizamos React, Vite, MaterialUI, Axios, Google OAuth, MVC. </Typography>
                                <Typography component='p' variant="body1"> <strong>Aprendizaje:</strong> El proyecto me ayudó a entrar en un entorno laboral más completo y cercano a lo real, con trabajo en equipo, uso de metodologías ágiles y control de errores. </Typography>
                            </Box>
                            <CardActions 
                                sx={{
                                    mt: '10px',
                                    justifyContent: 'center'
                            }}>
                                <Button href="https://github.com/LeiFraz/Semillero-Ubuntu" target="_blank" rel="noopener noreferrer" aria-label="Acceder al Repo de Github" size="small"
                                    sx={{
                                        p: '15px 25px',
                                        color: 'white',
                                        fontWeight: '700',
                                        letterSpacing: '2px',
                                        "&:hover":{color: '#02C8A7'}
                                }}>Ir a GitHub</Button>
                            </CardActions>
                        </CardContent>
                    </Box>
                </Card>
    {/* FISHSEASON */}
                <Card 
                    sx={{
                        mb: '30px',
                        backgroundColor: '#0B3C5D',
                        display: 'flex',
                        minWidth: '550px',
                        minHeight: '180px',
                        maxHeight: '380px',
                        maxWidth: '1000px',
                        borderRadius: '10px',
                }}>
                    <CardMedia 
                        component='img'
                        image={fishseason}
                        alt="Imagen del proyecto"
                        sx={{
                            width: '200px',
                            borderRadius: '10px',
                        }}
                    />
                    <Box 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            p: '0px 10px'
                    }}>
                        <CardContent 
                            sx={{color: 'white', display: 'flex', flexDirection:'column', gap: 1

                        }}>
                            <Typography variant="h3" 
                                sx={{
                                    fontSize: '25px',
                                    mb: '20px',
                            }}> 
                                FishSeason
                            </Typography>
                            <Box 
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1.5
                            }}>
                                <Typography component='p' variant="body1"> <strong>Problema:</strong> Creamos una plataforma con el objetivo de formar una comunidad de pescadores, donde pudieran compartir sus aventuras de pesca. </Typography>
                                <Typography component='p' variant="body1"> <strong>Rol:</strong> Estuve como Desarrollador Backend realizando las funcionalidades principales, creación de los endpoints, creación de los modelos para la base de datos y la consistencia de los datos para entregarlos al forntend. </Typography>
                                <Typography component='p' variant="body1"> <strong>Tecnologias:</strong> Utilizamos Node.js, Express, TypeScript, Sequelize, MySQL, ThunderCliente, MVC. </Typography>
                                <Typography component='p' variant="body1"> <strong>Aprendizaje:</strong> El proyecto me ayudó a tener un acercamiento de lo que es trabajar con un equipo completo UX/UI, testers, Frontend, Backend y PM. </Typography>
                            </Box>
                            <CardActions 
                                sx={{
                                    mt: '10px',
                                    justifyContent: 'center'
                            }}>
                                <Button href="https://github.com/xiriuxb/NoCountry_s15-08-n-node-react" target="_blank" rel="noopener noreferrer" aria-label="Acceder al Repo de Github" size="small"
                                    sx={{
                                        p: '15px 25px',
                                        color: 'white',
                                        fontWeight: '700',
                                        letterSpacing: '2px',
                                        "&:hover":{color: '#02C8A7'}
                                }}>Ir a GitHub</Button>
                                <Button href="https://no-country-s15-08-n-node-react.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Acceder al Deploy del proyecto" size="small"
                                    sx={{
                                        p: '15px 25px',
                                        color: 'white',
                                        fontWeight: '700',
                                        letterSpacing: '2px',
                                        "&:hover":{color: '#02C8A7'}
                                }}>Ver Deploy</Button>
                            </CardActions>
                        </CardContent>
                    </Box>
                </Card>
    {/* PropManager */}
                <Card 
                    sx={{
                        mb: '30px',
                        backgroundColor: '#0B3C5D',
                        display: 'flex',
                        minWidth: '550px',
                        minHeight: '180px',
                        maxHeight: '360px',
                        maxWidth: '1000px',
                        borderRadius: '10px',
                }}>
                    <CardMedia 
                        component='img'
                        image={propmanager}
                        alt="Imagen del proyecto"
                        sx={{
                            width: '200px',
                            borderRadius: '10px',
                        }}
                    />
                    <Box 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            p: '0px 10px'
                    }}>
                        <CardContent 
                            sx={{color: 'white', display: 'flex', flexDirection:'column', gap: 1

                        }}>
                            <Typography variant="h3" 
                                sx={{
                                    fontSize: '25px',
                                    mb: '20px',
                            }}> 
                                PropManager 
                            </Typography>
                            <Box 
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1.5
                            }}>
                                <Typography component='p' variant="body1"> <strong>Problema:</strong> Plataforma de ayuda en la gestión y optimización de propiedades inmobiliarias. Permite administrar reclamos, crear usuarios, contratos y asociarlos con un inquilino. </Typography>
                                <Typography component='p' variant="body1"> <strong>Rol:</strong> Estuve como Desarrollador Backend realizando los middleware, autenticación, creación de los endpoints, creación de la base de datos, funcionalidades principales que eran listado de datos. </Typography>
                                <Typography component='p' variant="body1"> <strong>Tecnologias:</strong> Utilizamos Node.js, Express, TypeScript, Sequelize, MySQL, ThunderCliente, MVC. </Typography>
                                <Typography component='p' variant="body1"> <strong>Aprendizaje:</strong> El proyecto me ayudó a considerar las habilidades de cada integrante del equipo, tener en cuenta los tiempos del proyecto y el scope aproximado para un equipo pequeño. </Typography>
                            </Box>
                            <CardActions 
                                sx={{
                                    mt: '10px',
                                    justifyContent: 'center'
                            }}>
                                <Button href="https://github.com/LeiFraz/PropManager" target="_blank" rel="noopener noreferrer" aria-label="Acceder al Repo de Github" size="small"
                                    sx={{
                                        p: '15px 25px',
                                        color: 'white',
                                        fontWeight: '700',
                                        letterSpacing: '2px',
                                        "&:hover":{color: '#02C8A7'}
                                }}>Ir a GitHub</Button>
                                <Button href="https://prop-manager.vercel.app/auth/sign-in?callbackUrl=https%3A%2F%2Fprop-manager.vercel.app%2F" target="_blank" rel="noopener noreferrer" aria-label="Acceder al Deploy del proyecto" size="small"
                                    sx={{
                                        p: '15px 25px',
                                        color: 'white',
                                        fontWeight: '700',
                                        letterSpacing: '2px',
                                        "&:hover":{color: '#02C8A7'}
                                }}>Ver Deploy</Button>
                            </CardActions>
                        </CardContent>
                    </Box>
                </Card>
            </Box>
        </>
    )
}

export default Projects