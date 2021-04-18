import { AppBar, Button, Drawer, Hidden, IconButton, List, ListItem, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiAppBar-root': {
            background: 'transparent'
        },
        '& a': {
            textDecoration: 'none',
            color: '#444'
        },
        '& a:focus': {
            outline: 'none'
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
    fullList: {
        minWidth: '200px',
        '& .MuiListItem-root': {
            justifyContent: 'center',
            padding: '5px 0',
        },
        '& .MuiListItem-root a': {
            width: '100%',
            textAlign: 'center',
        },
        '& .MuiListItem-root a.active .MuiButton-label': {
            color: '#fff'
        },
    },
}));

const Header = () => {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [state, setState] = useState(false);

    const toggleDrawer = () => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(!state);
    };

    const list = () => (
        <div
            role="presentation"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
            className={classes.fullList}
        >
            {loggedInUser.name && <Typography align="center" variant="h6" variantMapping={{ h6: 'h2' }} style={{ marginRight: '5rem', color: 'black', fontWeight: 'bold' }} >
                {loggedInUser.name}
            </Typography>}
            <List>
                <ListItem  >
                    <NavLink to="/home">
                        <ListItemText >
                            <Button >Home</Button>
                        </ListItemText>
                    </NavLink>
                </ListItem>

                <ListItem  >
                    <NavLink to="/destination/Car">
                        <ListItemText >
                            <Button >Destination</Button>
                        </ListItemText>
                    </NavLink>
                </ListItem>
                <ListItem  >
                    <NavLink to="/blog">
                        <ListItemText >
                            <Button >Blog</Button>
                        </ListItemText>
                    </NavLink>
                </ListItem>
                <ListItem  >
                    <NavLink to="/contact">
                        <ListItemText >
                            <Button >Contact</Button>
                        </ListItemText>
                    </NavLink>
                </ListItem>

            </List>

        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Hidden mdUp>
                        <IconButton onClick={toggleDrawer()} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Drawer open={state} onClose={toggleDrawer()}>
                            {list()}
                        </Drawer>
                    </Hidden>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/">AJ's Transport</Link>
                    </Typography>
                    <Hidden smDown>
                        <NavLink to="/home"><Button color="inherit">Home</Button></NavLink>
                        <NavLink to="/destination/Car"><Button color="inherit">Destination</Button></NavLink>
                        <NavLink to="/blog"><Button color="inherit">Blog</Button></NavLink>
                        <NavLink to="/contact"><Button color="inherit">Contact</Button></NavLink>
                        {loggedInUser.name && <Typography align="center" variant="button" style={{ marginRight: '2rem', color: 'black', fontWeight: 'bold' }}>
                            {loggedInUser.name}
                        </Typography>}
                    </Hidden>
                    {
                        loggedInUser.email ?
                            <Button onClick={() => setLoggedInUser({})} variant="contained" color="secondary">Logout</Button>
                            :
                            <NavLink to="/login"><Button variant="contained">Login</Button></NavLink>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;