import { useState } from 'react'
import { Box, Button, Typography } from "@mui/material"
import ProjectsCard from "./ProjectsCard.jsx"
import proyectos from '../../data/projects.js'

function Projects() {
    const [showAll, setShowAll] = useState(false)
    const hasMoreProjects = proyectos.length > 4
    const visibleProjects = showAll ? proyectos : proyectos.slice(0, 4)

    return(
            <Box component="section" id='Proyectos' className="content-section">
                <Typography component="h2" className="section-title" sx={{fontSize: {xs: '2rem', md: '3rem'}}}>
                    PROYECTOS
                </Typography>
                <Box className="project-list">
                {visibleProjects.map((item, index) => (
                <ProjectsCard key={`${item.id}-${index}`} proyecto={item}></ProjectsCard>
                ))}
                </Box>
                {hasMoreProjects && (
                    <Button
                        className="projects-toggle"
                        variant="outlined"
                        onClick={() => setShowAll(!showAll)}
                        aria-expanded={showAll}
                    >
                        {showAll ? 'Cerrar' : 'Ver más proyectos'}
                    </Button>
                )}
            </Box>
    )
}

export default Projects
