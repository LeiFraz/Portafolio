import { Avatar, Box, List, ListItem, ListItemIcon, Typography } from "@mui/material"

function TechsAndTools() {

    return(
        <>
            <Box id='Tecnologias' sx={{
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // height: '100vh',
                pt: '90px',
                // maxWidth: '700px',
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
                                    <Avatar src="src/assets/TechIcons/JavaScript.png"></Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/html.png"></Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/css3.png"></Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/react-logo.png"> React</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/angular-logo.png"> Angular</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/material-ui-logo.png"> MaterialUI</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/bootstrap-logo.png"> Bootsrap</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/axios-logo.png"> Axios</Avatar>
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
                                    <Avatar src="src/assets/TechIcons/nodejs-logo.png"> Node.js</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/typescript-logo.jpg"> TypeScript</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/sequelize-logo.png"> Sequielize</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/php.png"></Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/laravel-logo.png"> Laravel</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/Java.png"></Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/postgresql-logo.png"> PostgreSQL </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/mysql-logo.png"> MySQL</Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/mariaDB-logo.png"> MariaDB </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/mongoDB-logo.png"> MongoDB</Avatar>
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
                                    <Avatar src="src/assets/TechIcons/github-logo.jpg"> Git & GitHub </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/trello-logo.png"> Trello </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/postman-logo.png"> Postman </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/thunder-client-logo.png"> ThunderClient </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/figma-logo.png"> Figma </Avatar>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Avatar src="src/assets/TechIcons/canva-logo.png"> Canva </Avatar>
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