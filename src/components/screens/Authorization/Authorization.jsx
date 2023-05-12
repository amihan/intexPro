import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import { Form, useLocation, useNavigate } from "react-router-dom";
import { useData } from '../../../hooks/useData';
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { PermIdentity } from '@material-ui/icons';


const Authorization = observer(() => {
    const [login, setLogin] = React.useState('amirhan');
    const [password, setPassword] = React.useState('qwer');

    const location = useLocation();
    const navigate = useNavigate();

    const formPage = location.state?.from?.pathname || '/'
    const state = useData().storeAuth
    const { error, isAuth } = state
    // console.log('link auth', formPage)

    useEffect(() => {
        // console.log(isAuth)
        if (isAuth) {
            navigate(formPage, { replace: true })
        }
    }, [isAuth])


    const handleLogin = async (login, password) => {
        await state.login(login, password);
        navigate(formPage, { replace: true });
    }

    return (
        // {}

        <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    {/* <PermIdentity /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Авторизация
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={() => handleLogin(login, password)}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        type='text'
                        label="Логин"
                        name="email"
                        variant="outlined"
                        autoFocus
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        error={error}
                        helperText={error ? 'Email и(или) пароль введены не корректно' : ''}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        variant="outlined"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={error}
                        helperText={error ? 'Email и(или) пароль введены не корректно' : ''}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Войти
                    </Button>
                </Box>
            </Box>
        </Container >

    )
})

export default Authorization
