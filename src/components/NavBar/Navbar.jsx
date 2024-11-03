import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Avatar, Box, Button, Toolbar } from '@mui/material';


function NavBar() {

    const desplazamiento = (e) => {
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href');
        const elemento = document.querySelector(id);

        if (elemento) {
            elemento.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return(
        <>
            <AppBar>
                <Toolbar sx={{backgroundColor: '#062F4F'}}>
                    <Box sx={{
                        textAlign: 'center',
                        // position: 'absolute'
                    }}>
                        <Button href='#Inicio' onClick={desplazamiento}> 
                            <HomeIcon sx={{ 
                                color: '#ddd', 
                                "&:hover":{color: '#02C8A7'} 
                            }} fontSize="large"/> 
                        </Button>
                        
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        margin: 'auto',
                        gap: '25px',
                    }}>
                        <Button href='#SobreMi' onClick={desplazamiento} sx={{
                            p: '15px 25px',
                            color: 'white',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            "&:hover":{color: '#02C8A7'}/*#66B9BF, 66B9FF,#02C8A7*/
                        }}> 
                            SOBRE MI 
                        </Button>
                        <Button href='#Tecnologias' onClick={desplazamiento} sx={{
                            p: '15px 25px',
                            color: 'white',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            "&:hover":{color: '#02C8A7'}/*#66B9BF, 66B9FF,#02C8A7*/
                        }}> 
                            TECNOLOGIAS 
                        </Button>
                        <Button href='#Proyectos' onClick={desplazamiento} sx={{
                            p: '10px 20px',
                            color: 'white',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            "&:hover":{color: '#02C8A7'}
                        }}> 
                            PROYECTOS
                        </Button>
                        <Button href='#Contactame' onClick={desplazamiento} sx={{
                            p: '10px 20px',
                            color: 'white',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            "&:hover":{color: '#02C8A7'}
                        }}> 
                            CONTACTAME
                        </Button>
                    </Box>


                    <Avatar alt="Leonardo Paz" src='src\assets\profile-pic.png'> LP </Avatar>
                </Toolbar>
            </AppBar>
       
        </>
    )
}

export default NavBar