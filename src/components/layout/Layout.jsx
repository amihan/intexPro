
import Header from "./Header/Header";
import { useState } from "react";

import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useData } from '../../hooks/useData';
import { Grid, Container, makeStyles, CircularProgress } from '@material-ui/core';
import { observer } from 'mobx-react-lite';


const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(1.5)
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100vh'
  }
}));

function Layout() {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!isOpen);
  }

  const { isAuth, isLoaging } = useData().storeAuth;


  return (
    <div>
      <Header isOpen={isOpen} openMenu={openMenu} />
      <Container maxWidth='xl'>
        <Grid container>
          {isAuth ? <Grid item sm={2} xs={2}>
            <Navbar isOpen={isOpen} openMenu={openMenu} />
          </Grid> : <></>}


          <Grid item sm={isAuth ? 10 : 12} xs={isAuth ? 10 : 12} className={classes.content}>
            {isLoaging ? <CircularProgress className={classes.loading} /> : <Outlet />}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}


export default observer(Layout);

