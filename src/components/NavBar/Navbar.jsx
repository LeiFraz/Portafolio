import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import perfil from '../../assets/profile-pic.png';
import { useState } from 'react';

function NavBar() {

    const [open, setOpen] = useState(false);

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

    const navItems = [
        { label: 'Inicio', href: '#Inicio' },
        { label: 'Sobre mi', href: '#SobreMi' },
        { label: 'Proyectos', href: '#Proyectos' },
        { label: 'Tecnologias', href: '#Tecnologias' },
    ]

    const toggleDrawer = (newOpen) => () => {
            setOpen(newOpen);
        };

        const drawerList = (
            <Box role='navigation' onClick={toggleDrawer(false)} 
                sx={{
                    width: 250,
                }}
            >
                <List > 
                    {navItems.map((item) => (
                        <ListItem key={item.href} disablePadding>
                            <ListItemButton href={item.href} onClick={desplazamiento}
                                
                            >
                                <ListItemText primary={item.label}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        );

    return(
        <>  
            <AppBar sx={{display: {xs: 'flex', md: 'none'}, }}>
                <Toolbar 
                    sx={{
                        display: {xs: 'flex', md: 'none'},
                        backgroundColor: '#062F4F',
                        justifyContent: 'space-between'
                    }}>
                    <Button sx={{color: '#fff'}} onClick={toggleDrawer(true)}><MenuIcon/></Button>
                    <Drawer open={open} onClose={toggleDrawer(false)}
                        slotProps={{
                            paper: {
                            sx: {
                                width: 250,
                                backgroundColor: '#062F4F',
                                color: 'white',
                            },
                            },
                        }}
                    >
                        {drawerList}
                    </Drawer>
                    <Avatar alt="Foto de perfil Leonardo Paz" src={perfil}> LP </Avatar>
                </Toolbar>
            </AppBar>

            <AppBar sx={{display: {xs: 'none', md: 'flex'}}}>
                <Toolbar sx={{backgroundColor: '#062F4F'}}>
                    <Box sx={{
                        textAlign: 'center',
                        // position: 'absolute'
                    }}>
                        <Button href='#Inicio' onClick={desplazamiento}> 
                            <HomeIcon sx={{ 
                                color: '#ddd', 
                                "&:hover":{color: '#02C8A7'},
                            }} fontSize="large"/> 
                        </Button>
                        
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        margin: 'auto',
                        gap: '1rem',
                    }}>
                        <Button href='#SobreMi' onClick={desplazamiento} sx={{
                            p: '1rem',
                            color: 'white',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            "&:hover":{color: '#02C8A7'}/*#66B9BF, 66B9FF,#02C8A7*/
                        }}> 
                            SOBRE MI 
                        </Button>
                        <Button href='#Proyectos' onClick={desplazamiento} sx={{
                            p: '1rem',
                            color: 'white',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            "&:hover":{color: '#02C8A7'}
                        }}> 
                            PROYECTOS
                        </Button>
                        <Button href='#Tecnologias' onClick={desplazamiento} sx={{
                            p: '1rem',
                            color: 'white',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            "&:hover":{color: '#02C8A7'}/*#66B9BF, 66B9FF,#02C8A7*/
                        }}> 
                            TECNOLOGIAS 
                        </Button>
                        {/* <Button href='#Contactame' onClick={desplazamiento} sx={{
                            p: '10px 20px',
                            color: 'white',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            "&:hover":{color: '#02C8A7'}
                        }}> 
                            CONTACTAME
                        </Button> */}
                    </Box>

                    <Avatar alt="Foto de perfil Leonardo Paz" src={perfil}> LP </Avatar>
                </Toolbar>
            </AppBar>
       
        </>
    )
}

export default NavBar