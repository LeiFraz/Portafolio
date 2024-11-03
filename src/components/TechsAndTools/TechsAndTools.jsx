import { Avatar, Box, List, ListItem, ListItemIcon, Typography } from "@mui/material"
import angular from '../../assets/TechIcons/angular-logo.png'
import axios from '../../assets/TechIcons/axios-logo.png'
import bootstrap from '../../assets/TechIcons/bootstrap-logo.png'
import canva from '../../assets/TechIcons/canva-logo.png'
import css3 from '../../assets/TechIcons/css3.png'
import figma from '../../assets/TechIcons/figma-logo.png'
import github from '../../assets/TechIcons/github9775-2427096616.jpg'
import html from '../../assets/TechIcons/html.png'
import java from '../../assets/TechIcons/java.png'
import javascript from '../../assets/TechIcons/JavaScript.png'
import laravel from '../../assets/TechIcons/laravel-logo.png'
import mariaDB from '../../assets/TechIcons/mariaDB-logo.png'
import materialUI from '../../assets/TechIcons/material-ui-logo.png'
import mongoDB from '../../assets/TechIcons/mongoDB-logo.png'
import mysql from '../../assets/TechIcons/mysql-logo.png'
import nodejs from '../../assets/TechIcons/nodejs-logo.png'
import php from '../../assets/TechIcons/php.png'
import postgresql from '../../assets/TechIcons/postgresql-logo.png'
import postman from '../../assets/TechIcons/postman-logo.png'
import react from '../../assets/TechIcons/react-logo.png'
import sequelize from '../../assets/TechIcons/sequelize-logo.png'
import thunderClient from '../../assets/TechIcons/thunder-client-logo.png'
import trello from '../../assets/TechIcons/trello-logo.png'
import typescript from '../../assets/TechIcons/typescript-logo.jpg'

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
                                    <Avatar src={javascript}></Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={html}></Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={css3}></Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={react}> React</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={angular}> Angular</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={materialUI}> MaterialUI</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={bootstrap}> Bootsrap</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={axios}> Axios</Avatar>
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
                                    <Avatar src={nodejs}> Node.js</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={typescript}> TypeScript</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={sequelize}> Sequielize</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={php}></Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={laravel}> Laravel</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={java}></Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={postgresql}> PostgreSQL </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={mysql}> MySQL</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={mariaDB}> MariaDB </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={mongoDB}> MongoDB</Avatar>
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
                                    <Avatar src={github}> Git & GitHub </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={trello}> Trello </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={postman}> Postman </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={thunderClient}> ThunderClient </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={figma}> Figma </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src={canva}> Canva </Avatar>
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