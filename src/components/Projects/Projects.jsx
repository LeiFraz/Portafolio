import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"


function Projects() {

    return(
        <>
            <Box id='Proyectos' sx={{
                margin: 'auto',
                pt: '138px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // height: '100vh',
            }}>
                <Typography variant="h2" sx={{
                    fontSize: '35px',
                    fontWeight: 'bold',
                    mb: '30px'
                }}> 
                    PROJECTS
                </Typography>
    {/* SEMILLERO DE QUINTO IMPACTO */}
                <Card sx={{
                    mb: '30px',
                    backgroundColor: '#0B3C5D',
                    display: 'flex',
                    maxWidth: '740px',
                    maxHeight: '180px',
                    borderRadius: '10px',
                }}>
                    <CardMedia 
                        component='img'
                        image="src\assets\Projects\Semillero.jpg"
                        alt=""
                        sx={{
                            width: '200px',
                            borderRadius: '10px',
                        }}
                    />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        p: '0px 10px'
                    }}>
                        <CardContent sx={{color: 'white'}}>
                            <Typography variant="h3" sx={{
                                fontSize: '25px',
                                mb: '20px',
                            }}> 
                                Ubuntu - Semillero de Quinto Impacto 
                            </Typography>
                            <Typography variant="p">
                                Página web destinada a impulsar el crecimiento de microemprendimientos, brindándoles oportunidades de financiamiento y mayor visibilidad.
                            </Typography>
                            <CardActions sx={{
                                mt: '10px',
                                justifyContent: 'center'
                            }}>
                                <Button href="https://github.com/LeiFraz/Semillero-Ubuntu" target="_blank" sx={{
                                    p: '15px 25px',
                                    color: 'white',
                                    fontWeight: '700',
                                    letterSpacing: '2px',
                                    "&:hover":{color: '#02C8A7'}
                                }}>Ir a GitHub</Button>
                                {/* <Button href="https://no-country-s15-08-n-node-react.vercel.app" target="_blank" sx={{
                                    p: '15px 25px',
                                    color: 'white',
                                    fontWeight: '700',
                                    letterSpacing: '2px',
                                    "&:hover":{color: '#02C8A7'}
                                }}>Ver Deploy</Button> */}
                            </CardActions>
                        </CardContent>
                    </Box>
                </Card>
    {/* FISHSEASON */}
                <Card sx={{
                    mb: '30px',
                    backgroundColor: '#0B3C5D',
                    display: 'flex',
                    maxWidth: '740px',
                    maxHeight: '170px',
                    borderRadius: '10px',
                }}>
                    <CardMedia 
                        component='img'
                        image="src\assets\Projects\FishSeason.png"
                        alt=""
                        sx={{
                            width: '200px',
                            borderRadius: '10px',
                        }}
                    />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        p: '0px 10px'
                    }}>
                        <CardContent sx={{color: 'white'}}>
                            <Typography variant="h3" sx={{
                                fontSize: '25px',
                                mb: '10px',
                            }}> 
                                FishSeason 
                            </Typography>
                            <Typography variant="p">
                                Creamos una plataforma con el objetivo de formar una comunidad de
                                pescadores, donde pudieran compartir sus aventuras de pesca.
                            </Typography>
                            <CardActions sx={{
                                mt: '10px',
                                justifyContent: 'center'
                            }}>
                                <Button href="https://github.com/xiriuxb/NoCountry_s15-08-n-node-react" target="_blank" sx={{
                                    p: '15px 25px',
                                    color: 'white',
                                    fontWeight: '700',
                                    letterSpacing: '2px',
                                    "&:hover":{color: '#02C8A7'}
                                }}>Ir a GitHub</Button>
                                <Button href="https://no-country-s15-08-n-node-react.vercel.app" target="_blank" sx={{
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
                <Card sx={{
                    mb: '30px',
                    backgroundColor: '#0B3C5D',
                    display: 'flex',
                    minWidth: '740px',
                    maxWidth: '740px',
                    maxHeight: '170px',
                    borderRadius: '10px',
                }}>
                    <CardMedia 
                        component='img'
                        image="src\assets\Projects\PropManager.png"
                        alt=""
                        sx={{
                            width: '200px',
                            borderRadius: '10px',
                        }}
                    />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        p: '0px 10px'
                    }}>
                        <CardContent sx={{color: 'white'}}>
                            <Typography variant="h3" sx={{
                                fontSize: '25px',
                                mb: '10px',
                            }}> 
                                PropManager 
                            </Typography>
                            <Typography variant="p">
                                Plataforma de ayuda en la gestión y optimización de propiedades inmobiliarias.
                                Permite administrar reclamos, crear usuarios, contratos y asociarlos con un inquilino.
                            </Typography>
                            <CardActions sx={{
                                mt: '10px',
                                justifyContent: 'center'
                            }}>
                                <Button href="https://github.com/LeiFraz/PropManager" target="_blank" sx={{
                                    p: '15px 25px',
                                    color: 'white',
                                    fontWeight: '700',
                                    letterSpacing: '2px',
                                    "&:hover":{color: '#02C8A7'}
                                }}>Ir a GitHub</Button>
                                <Button href="https://prop-manager.vercel.app/auth/sign-in?callbackUrl=https%3A%2F%2Fprop-manager.vercel.app%2F" target="_blank" sx={{
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