import HomeIcon from '@mui/icons-material/Home';
import { AppBar, Box, Button, Toolbar } from '@mui/material';


function NavBar() {

    return(
        <>
            <AppBar>
                <Toolbar sx={{backgroundColor: '#062F4F'}}>
                    <Box sx={{
                        textAlign: 'center',
                        position: 'absolute'
                    }}>
                        <Button href='#Inicio'> 
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
                        <Button href='#SobreMi' sx={{
                            p: '15px 25px',
                            color: 'white',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            "&:hover":{color: '#02C8A7'}/*#66B9BF, 66B9FF,#02C8A7*/
                        }}> 
                            SOBRE MI 
                        </Button>
                        <Button href='#Proyectos' sx={{
                            p: '10px 20px',
                            color: 'white',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            "&:hover":{color: '#02C8A7'}
                        }}> 
                            PROYECTOS
                        </Button>
                        <Button href='#Contactame' sx={{
                            p: '10px 20px',
                            color: 'white',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            "&:hover":{color: '#02C8A7'}
                        }}> 
                            CONTACTAME
                        </Button>
                    </Box>

                </Toolbar>
            </AppBar>
       
        </>
    )
}

export default NavBar