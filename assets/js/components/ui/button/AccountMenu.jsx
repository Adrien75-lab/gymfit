import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import authAPI from '../../../services/authAPI';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { RiAccountCircleFill } from 'react-icons/ri';
import { BsFillArchiveFill } from 'react-icons/bs';
import { makeStyles } from '@mui/styles';
import { createTheme } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  //   '& > *': {
  //     margin: theme.spacing(1),
  //   },
  // },
  // small: {
  //   width: theme.spacing(3),
  //   height: theme.spacing(3),
  // },
  large: {
    width: 150,
    height: 150,
  },
}));

export default function AccountMenu({ isAuthenticated, onLogout, history }) {
  const handleLogout = () => {
    authAPI.logout();
    onLogout(false);
    history.push("/login");
  };
  const handleProfil = () => {

    history.push("/profil");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //Declare a new state variable called "selectedImageDataUrl" and initialize it to an empty string
  const [selectedImageDataUrl, setSelectedImageDataUrl] = React.useState("");
  useEffect(() => {
    const imageData = localStorage.getItem("selectedImage");

    if (imageData) {
      setSelectedImageDataUrl(imageData);
    }
  }, []);
  // useEffect(() => {
  //   console.log("selectedImageDataUrl:", selectedImageDataUrl);
  // }, [selectedImageDataUrl]);

  const handleSave = () => {
    if (!selectedImageDataUrl) {
      // Update the errorMessage state variable with a message indicating that no image was selected
      setErrorMessage("Please select an image to save.");
      return;
    }

    localStorage.setItem("selectedImage", selectedImageDataUrl);
  };
  const handleFileChange = (event) => {
    // Get the selected file
    const file = event.target.files[0];
    // Check the file size and type
    if (file.size > 1024 * 1024) {
      // Update the errorMessage state variable with a message indicating that the file is too large
      setErrorMessage(
        "The selected file is too large. Please select a file that is 1MB or smaller."
      );
      return;
    }
    if (!file.type.startsWith("image/")) {
      // Update the errorMessage state variable with a message indicating that the file is not an image
      setErrorMessage(
        "The selected file is not an image. Please select an image file."
      );
      return;
    }
    // Read the selected file as a data URL
    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result;
      // Update the selectedImageDataUrl state variable with the data URL
      setSelectedImageDataUrl(dataUrl);
      // Store the data URL in local storage
      localStorage.setItem("selectedImage", dataUrl);
    };
    reader.readAsDataURL(file);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'flex-end' }}>
        <label for="formFile" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Choisis ta photo de profil</label>
        <input class="form-control" onChange={handleFileChange} type="file" id="formFile" accept="image/*" />
      </Box>
      <div className="mt-5" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      </div>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'flex-end' }}>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profil</Typography> */}
        <Tooltip title="Paramètres du compte">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >

            <Avatar sx={{ marginRight: 5,height: 60, width: 60 }} >
              {selectedImageDataUrl &&
                <div >
                  <Avatar sx={{ height: 60, width: 60 }} src={selectedImageDataUrl} alt="selected" />
                </div>
              }
            </Avatar>

          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <MenuItem button component={Link} to="/profil">
          <Avatar />
          <Typography>Profil</Typography>
        </MenuItem>


        <MenuItem>
          <ListItemIcon>
            <BsFillArchiveFill fontSize="medium" />
          </ListItemIcon>
          Mon compte
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Paramètres
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Se déconnecter
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}