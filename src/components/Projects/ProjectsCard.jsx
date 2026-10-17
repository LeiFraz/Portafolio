/* eslint-disable react/prop-types -- Project data comes from the local data module. */
import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Box, Button, Typography } from "@mui/material";

function ProjectsCard({ proyecto }) {
    const { titulo, problema, rol, tecnologias, aprendizaje, links, imagen, imagenAlt } = proyecto;
    const [isOpen, setIsOpen] = useState(false);
    const cardRef = useRef(null);
    const dialogRef = useRef(null);
    const ignoreNextFocusRef = useRef(false);
    const detailsId = useId();
    const titleId = useId();

    useEffect(() => {
        if (!isOpen) return;

        function closeOutside(event) {
            if (!cardRef.current?.contains(event.target) && !dialogRef.current?.contains(event.target)) {
                setIsOpen(false);
            }
        }

        function closeOnBlur(event) {
            if (!cardRef.current?.contains(event.target) && !dialogRef.current?.contains(event.target)) {
                setIsOpen(false);
            }
        }

        function closeOnEscape(event) {
            if (event.key === 'Escape') {
                setIsOpen(false);
                ignoreNextFocusRef.current = true;
                cardRef.current?.querySelector('button')?.focus();
            }
        }

        if (cardRef.current?.contains(document.activeElement)) dialogRef.current?.focus();
        document.addEventListener('pointerdown', closeOutside);
        document.addEventListener('focusin', closeOnBlur);
        document.addEventListener('keydown', closeOnEscape);
        return () => {
            document.removeEventListener('pointerdown', closeOutside);
            document.removeEventListener('focusin', closeOnBlur);
            document.removeEventListener('keydown', closeOnEscape);
        };
    }, [isOpen]);

    return (
        <>
        <Box
            component="article"
            ref={cardRef}
            className="project-card"
            onFocus={() => {
                if (ignoreNextFocusRef.current) {
                    ignoreNextFocusRef.current = false;
                    return;
                }
                setIsOpen(true);
            }}
        >
            <button
                type="button"
                className="project-visual"
                aria-label={`Ver detalles de ${titulo}`}
                aria-expanded={isOpen}
                aria-controls={detailsId}
                onClick={() => setIsOpen(true)}
            >
                <img className="project-image" src={imagen} alt={imagenAlt} loading="lazy" />
                <span className="project-more-info">Más info</span>
            </button>
        </Box>
        {isOpen && createPortal(
                <Box className="project-overlay">
                    <Box className="project-backdrop" onClick={() => setIsOpen(false)} />
                    <Box
                        component="article"
                        id={detailsId}
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={titleId}
                        tabIndex={-1}
                        className="project-card-expanded"
                        onMouseLeave={() => {
                            if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                                setIsOpen(false);
                            }
                        }}
                    >
                        <button
                            type="button"
                            className="project-close"
                            aria-label={`Cerrar detalles de ${titulo}`}
                            onClick={() => setIsOpen(false)}
                        >
                            ×
                        </button>
                        <Box className="project-card-scroll">
                            <Box className="project-expanded-visual">
                                <img className="project-image" src={imagen} alt={imagenAlt} />
                            </Box>
                            <Box className="project-content">
                                <Typography id={titleId} component="h3" sx={{fontSize: {xs: '1.6rem', md: '2rem'}, mb: 2}}>{titulo}</Typography>
                                <Typography component="p" sx={{mb: 1.5}}><strong>Problema: </strong>{problema}</Typography>
                                <Typography component="p" sx={{mb: 1.5}}><strong>Rol: </strong>{rol}</Typography>
                                <Typography component="p" sx={{mb: 1.5}}><strong>Tecnologías: </strong>{tecnologias.join(', ')}</Typography>
                                <Typography component="p"><strong>Aprendizaje: </strong>{aprendizaje}</Typography>
                                <Box className="project-links">
                                    {links.map((item) => (
                                        <Button key={item.label} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.ariaLabel}>
                                            Ir a {item.label}
                                        </Button>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>,
                document.body
        )}
        </>
    );
}

export default ProjectsCard;
