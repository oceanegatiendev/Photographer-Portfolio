import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
    BrowserRouter as Router,
    Link,
    NavLink,
  } from "react-router-dom";

  import Flip from 'react-reveal/Flip';
import { Button, Menu, MenuItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//https://ant.design/components/dropdown/
//https://www.react-reveal.com/examples/common/fade/
//https://github.com/FormidableLabs/react-animations
// Cinzel  Bebas Neue
const useStyles = makeStyles((theme) => ({
    root: {
        color : '#000000',
        background: "#fff",
        position: "sticky",
        fontFamily: 'Cinzel',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      align: 'left',
      fontFamily: 'Cinzel',

    },
    link: {
        fontSize: '24px',
        color: "#000000",
        fontFamily: 'Bebas Neue',
        marginRight: theme.spacing(4)
    },
    ul: {
        display: "inline",

    },
    menu: {
        marginTop: theme.spacing(5)
    },
    downIcon: {
        color: "#000000",
        fontFamily: 'Bebas Neue',
        fontSize: '24px',
    },
    downLink: {
        fontSize: '20px',
        color: "#000000",
        fontFamily: 'Bebas Neue',
    }
  }));

  export default function NavBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
  
            <AppBar className={classes.root}>
                <Toolbar>
                    <Typography align='center' variant="h3" className={classes.title}>
                        <Flip right>
                            Cartier Manon
                        </Flip>
                    </Typography>
                    <Typography variant="h6">
                        <ul className={classes.ul}>
                            <li className={classes.ul}>
                                <NavLink className={classes.link} to="/">Accueil</NavLink>
                            </li>
                            <li className={classes.ul}>
                               
                                <NavLink className={classes.downIcon} to="/galery">
                                    Galeries
                                </NavLink>
                                <Button className={classes.downIcon} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    <ExpandMoreIcon fontSize="inherit"/>
                                </Button>
                            
                                <Menu
                                    className={classes.menu}
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    >
                                <MenuItem onClick={handleClose}>
                                    <NavLink className={classes.downLink} to="/animaux">Animaux</NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <NavLink className={classes.downLink} to="/portraits">Portraits</NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <NavLink className={classes.downLink} to="/event">Evenements</NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <NavLink className={classes.downLink} to="/paysages">Paysages</NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <NavLink className={classes.downLink} to="/videos">Vidéos</NavLink>
                                </MenuItem>
                                </Menu>
                            </li>
                            <li className={classes.ul}>
                                <Link className={classes.link} to="/contact">Contact</Link>
                            </li>
                        </ul>

                    </Typography>

                </Toolbar>
            </AppBar>



    );
}

