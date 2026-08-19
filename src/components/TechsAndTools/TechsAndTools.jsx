import { Avatar, Box, List, ListItem, ListItemIcon, Typography } from "@mui/material"
import angular from '../../assets/TechIcons/angular-logo.webp'
import axios from '../../assets/TechIcons/axios-logo.webp'
import bootstrap from '../../assets/TechIcons/bootstrap-logo.png'
import canva from '../../assets/TechIcons/canva-logo.webp'
import css3 from '../../assets/TechIcons/css3.webp'
import figma from '../../assets/TechIcons/figma-logo.webp'
import github from '../../assets/TechIcons/github9775-2427096616.webp'
import html from '../../assets/TechIcons/html.webp'
import java from '../../assets/TechIcons/java.webp'
import javascript from '../../assets/TechIcons/JavaScript.png'
import laravel from '../../assets/TechIcons/laravel-logo.webp'
import mariaDB from '../../assets/TechIcons/mariaDB-logo.webp'
import materialUI from '../../assets/TechIcons/material-ui-logo.webp'
import mongoDB from '../../assets/TechIcons/mongoDB-logo.webp'
import mysql from '../../assets/TechIcons/mysql-logo.webp'
import nodejs from '../../assets/TechIcons/nodejs-logo.webp'
import php from '../../assets/TechIcons/php.webp'
import postgresql from '../../assets/TechIcons/postgresql-logo.webp'
import postman from '../../assets/TechIcons/postman-logo.webp'
import react from '../../assets/TechIcons/react-logo.png'
import sequelize from '../../assets/TechIcons/sequelize-logo.webp'
import thunderClient from '../../assets/TechIcons/thunder-client-logo.webp'
import trello from '../../assets/TechIcons/trello-logo.webp'
import typescript from '../../assets/TechIcons/typescript-logo.webp'

function TechsAndTools() {

    return(
        <>
            <Box id='Tecnologias' sx={{
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                pt: '90px',
                maxWidth: '700px',
                width: '100vw',
                
            }}>
                <Typography variant="h3" sx={{
                    pb: '20px', 
                    fontWeight: 'bold'}}> 
                        TECNOLOGÍAS Y HERRAMIENTAS 
                </Typography>
                <Box sx={{
                    mb: '30px',
                    // maxWidth: '700px',
                    backgroundColor: '#0B3C5D',
                    borderRadius: '10px',
                    p: '15px 20px',
                }}>
                    <Box sx={{pb: '20px'}}>
                        <Typography variant="p" sx={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                        }}> 
                            Front 
                        </Typography>
                        <List sx={{
                            display: 'flex',
                            backgroundColor: '#242424',
                            borderRadius: '10px'
                        }}>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono JavaScript" src={javascript}></Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono Html" src={html}></Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono Css3" src={css3}></Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono React" src={react}> React</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono Angular" src={angular}> Angular</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono MaterialUI" src={materialUI}> MaterialUI</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono Bootsrap" src={bootstrap}> Bootsrap</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono Axios" src={axios}> Axios</Avatar>
                                </ListItemIcon>
                            </ListItem>
                        </List>
                    </Box>
                    <Box sx={{pb: '20px'}}>
                    <Typography variant="p" sx={{
                            fontSize: '25px',
                            fontWeight: 'bold'
                        }}> 
                            Back 
                        </Typography>
                        <List sx={{
                            display: 'flex',
                            backgroundColor: '#242424',
                            borderRadius: '10px'
                        }}>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono Node.js" src={nodejs}> Node.js</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono TypeScript" src={typescript}> TypeScript</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono Sequielize" src={sequelize}> Sequielize</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono Php" src={php}></Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono Laravel" src={laravel}> Laravel</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono Java" src={java}></Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono Postresql" src={postgresql}> PostgreSQL </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono Mysql" src={mysql}> MySQL</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono MariaDB" src={mariaDB}> MariaDB </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono MongoDB" src={mongoDB}> MongoDB</Avatar>
                                </ListItemIcon>
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
                    <Typography variant="p" sx={{
                            fontSize: '25px',
                            fontWeight: 'bold'
                        }}> 
                            Otros 
                        </Typography>
                        <List sx={{
                            display: 'flex',
                            backgroundColor: '#242424',
                            borderRadius: '10px'
                        }}>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono GitHub" src={github}> GitHub </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono Trello" src={trello}> Trello </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono Postman" src={postman}> Postman </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono ThunderClient" src={thunderClient}> ThunderClient </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono Figma" src={figma}> Figma </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar alt="Icono Canva" src={canva}> Canva </Avatar>
                                </ListItemIcon>
                            </ListItem>

                        </List>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default TechsAndTools