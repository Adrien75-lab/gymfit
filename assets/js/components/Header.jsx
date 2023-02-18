import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import {Typography} from "@mui/material";

export default function Header() {
    return (
        <MuiAppBar elevation={0} position="fixed">
            <Typography>
                C'est mon header
            </Typography>
        </MuiAppBar>
    )
}