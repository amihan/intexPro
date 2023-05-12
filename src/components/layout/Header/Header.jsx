import BurgerMenu from './BurgerMenu';
import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography, alpha, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons';
import { useData } from '../../../hooks/useData';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    logoLg: {
        display: "block",
        [theme.breakpoints.down("sm")]: {
            // fontSize: "10px",
        },
    },
    search: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0.5),
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            display: (props) => (props.open ? "flex" : "none"),
            width: "70%",
        },
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1),
    },
    cancel: {
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    icons: {
        alignItems: "center",
        display: (props) => (props.open ? "none" : "flex"),
    },
    badge: {
        marginRight: theme.spacing(2),
    },
}));

const Header = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });


    const { isAuth } = useData().storeAuth;
    // console.log('isAuth', isAuth)


    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
                    INTEXPRO
                </Typography>
                {/* <div className={classes.search}>
                    <Search />
                    <InputBase disabled placeholder="Search..." className={classes.input} />
                    <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
                </div> */}
                <div className={classes.icons}>
                    {/* <Search
                        className={classes.searchButton}
                        onClick={() => setOpen(true)}
                    /> */}
                    {isAuth ?
                        <>
                            <Link to='/'>
                                <Badge overlap="rectangular" badgeContent={4} color="secondary" className={classes.badge}>
                                    <Mail />
                                </Badge>
                            </Link>
                            <Avatar
                                alt="Remy Sharp"
                            />
                        </>
                        : <Link to='/auth'>Войти</Link>}

                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;   