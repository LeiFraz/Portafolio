import { Box, Typography } from "@mui/material"
import ProjectsCard from "./ProjectsCard.jsx"
import proyectos from '../../data/projects.js'

function Projects() {
    
    return(
        <>
            <Box id='Proyectos' 
                sx={{
                    width: '100%',
                    maxWidth: '750px',
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
            }}>
                <Typography variant="h2" 
                    sx={{
                        fontSize: {xs: '1.6rem', sm: '2rem' , md: '3rem'},
                        fontWeight: 'bold',
                        mb: '30px'
                }}> 
                    PROJECTS
                </Typography>
                
                {proyectos.map((item) => (
                <ProjectsCard key={item.id} proyecto={item}></ProjectsCard>
                ))}
            </Box>
            
        </>
    )
}

export default Projects