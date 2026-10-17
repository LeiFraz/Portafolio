import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import { useState } from 'react';
import perfil from '../../assets/profile-pic.png';

const navItems = [
    { label: 'Inicio', href: '#Inicio' },
    { label: 'Sobre mí', href: '#SobreMi' },
    { label: 'Proyectos', href: '#Proyectos' },
    { label: 'Tecnologías', href: '#Tecnologias' },
];

function NavBar() {
    const [open, setOpen] = useState(false);

    const scrollToSection = (event) => {
        event.preventDefault();
        const section = document.getElementById(event.currentTarget.getAttribute('href').slice(1));
        section?.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
        setOpen(false);
    };

    return (
        <AppBar position="fixed" elevation={0} sx={{backgroundColor: 'rgba(6, 47, 79, .96)', borderBottom: '1px solid rgba(175, 195, 208, .18)'}}>
            <Toolbar sx={{width: '100%', maxWidth: '1240px', mx: 'auto', gap: 2}}>
                <Button href="#Inicio" onClick={scrollToSection} sx={{color: '#eaf2f4', fontWeight: 800, fontSize: '1.1rem', minWidth: 0, p: 1, textTransform: 'none', '&:hover': {color: '#02c8a7'}}} aria-label="Ir al inicio">
                    LP
                </Button>
                <Box component="nav" aria-label="Navegación principal" sx={{display: {xs: 'none', md: 'flex'}, gap: 1, ml: 'auto'}}>
                    {navItems.slice(1).map((item) => (
                        <Button key={item.href} href={item.href} onClick={scrollToSection} sx={{color: '#eaf2f4', textTransform: 'none', fontWeight: 600, px: 2, '&:hover': {color: '#02c8a7'}}}>
                            {item.label}
                        </Button>
                    ))}
                </Box>
                <Avatar alt="Foto de perfil Leonardo Paz" src={perfil} sx={{width: 38, height: 38, ml: {xs: 'auto', md: 1}}}>LP</Avatar>
                <IconButton onClick={() => setOpen(true)} aria-label="Abrir menú" sx={{display: {xs: 'inline-flex', md: 'none'}, color: '#eaf2f4'}}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={open} onClose={() => setOpen(false)} slotProps={{paper: {sx: {width: 260, backgroundColor: '#062f4f', color: '#eaf2f4'}}}}>
                    <Box component="nav" aria-label="Navegación móvil">
                        <List>
                            {navItems.map((item) => (
                                <ListItem key={item.href} disablePadding>
                                    <ListItemButton href={item.href} onClick={scrollToSection} sx={{py: 2, '&:hover': {color: '#02c8a7'}}}>
                                        <ListItemText primary={item.label} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
