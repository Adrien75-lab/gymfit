import React, { useState } from 'react';
import { Typography, Slider, TextField, Box } from '@material-ui/core';

function Parameters() {
    const [diplome, setDiplome] = useState(0);
    const [experience, setExperience] = useState(0);
    const [description, setDescription] = useState('');
    const [specialite, setSpecialite] = useState('');

    const handleDiplomeChange = (event, value) => {
        setDiplome(value);
    };

    const handleExperienceChange = (event, value) => {
        setExperience(value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSpecialiteChange = (event) => {
        setSpecialite(event.target.value);
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6">Informations du coach</Typography>
            <Box width={300} mt={2}>
                <Typography id="diplome-slider" gutterBottom>Diplôme :</Typography>
                <Slider
                    value={diplome}
                    onChange={handleDiplomeChange}
                    min={0}
                    max={10}
                    step={0.5}
                    valueLabelDisplay="auto"
                    aria-labelledby="diplome-slider"
                />
            </Box>
            <Box width={300} mt={2}>
                <Typography id="experience-slider" gutterBottom>Expérience :</Typography>
                <Slider
                    value={experience}
                    onChange={handleExperienceChange}
                    min={0}
                    max={10}
                    step={0.5}
                    valueLabelDisplay="auto"
                    aria-labelledby="experience-slider"
                />
            </Box>
            <Box width={300} mt={2} mb={2}>
                <Typography gutterBottom>Description :</Typography>
                <TextField
                    value={description}
                    onChange={handleDescriptionChange}
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
            </Box>
            <Box width={300} mt={2}>
                <Typography>Spécialité :</Typography>
            </Box>
            <Box width={300} mb={2}>
                <TextField
                    value={specialite}
                    onChange={handleSpecialiteChange}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
            </Box>
        </Box>
    );
}

export default Parameters;