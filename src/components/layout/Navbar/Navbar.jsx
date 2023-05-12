import { Link } from "react-router-dom";
import { useData } from '../../../hooks/useData'
import { Container, List, Typography, makeStyles } from '@material-ui/core';
import { Announcement, AttachMoney, Attachment, Bookmark, ExitToApp, Home, LocalLibrary, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        color: "white",
        paddingTop: theme.spacing(8),
        backgroundColor: theme.palette.primary.light,
        position: "sticky",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        top: 0,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: 'white',
            color: "#555",
            border: "1px solid #ece7e7",
        },
    },
    item: {
        color: 'inherit',
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
        },
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px",
        },
    },
    text: {
        fontSize: 20,
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));



const Navbar = ({ isOpen, openMenu }) => {
    const state = useData().storeAuth;
    const classes = useStyles();

    return (<>
        <Container className={classes.container}>
            <Link className={classes.item} to='/profile'>
                <Person className={classes.icon} />
                <Typography className={classes.text}>Профиль</Typography>
            </Link>
            <Link className={classes.item} to='/reference'>
                <Attachment className={classes.icon} />
                <Typography className={classes.text}>Справка</Typography>
            </Link>
            <Link className={classes.item} to='/news'>
                <Announcement className={classes.icon} />
                <Typography className={classes.text}>Новости</Typography>
            </Link>
            <Link className={classes.item} to='/payments'>
                <AttachMoney className={classes.icon} />
                <Typography className={classes.text}>Оплаты</Typography>
            </Link>
            <Link className={classes.item} to='/lessons'>
                <LocalLibrary className={classes.icon} />
                <Typography className={classes.text}>Занятия</Typography>
            </Link>
            <Link className={classes.item} to='/' onClick={() => state.logout()}>
                <ExitToApp className={classes.icon} />
                <Typography className={classes.text}>Выход</Typography>
            </Link>
        </Container>
    </>
    );
};

export default Navbar;