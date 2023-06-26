import { Box, Button, FormControl, Grid, InputLabel, List, ListItemText, MenuItem, Select, TextField, Typography, makeStyles, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useData } from '../../../hooks/useData';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import ChildrenButton from '../../UI/ChildrenButton';



const useStyles = makeStyles((theme) => ({
    row: {
        marginBottom: theme.spacing(1),
    },
    title: {
        textAlign: 'center',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),

    },
}));





const ProfilePage = () => {
    const classes = useStyles();
    const state = useData().storeСhildren

    const { isLoading, activeProfile, childrens, chahgeActiveProfile } = state

    const { fio, contract, dateBirth, datepay, parent } = state.сhildren
    const [surname, name, patronymic] = fio.split(' ')

    useEffect(() => {
        state.getProfile()
    }, [])

    // const handleChildSelection = (id) => {
    //     chahgeActiveProfile(id)
    // };

    // const renderChildButton = (child) => {
    //     let isActive
    //     if (child.id === activeProfile) {
    //         isActive = true
    //     } else {
    //         isActive = false
    //     }

    //     return (
    //         <Button
    //             key={child.id}
    //             variant={isActive ? 'contained' : 'outlined'}
    //             color={isActive ? 'primary' : 'default'}
    //             onClick={() => handleChildSelection(child.id)}
    //         >
    //             {child.fio}
    //         </Button>
    //     );
    // };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Профиль
            </Typography>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" gutterBottom>
                                Персональные данные
                            </Typography>
                            <Box sx={{ marginBottom: 2 }}>
                                <Typography variant="subtitle1" gutterBottom>
                                    Имя: {name}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Фамилия: {surname}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Отчество: {patronymic}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Номер контракта: №{contract}
                                </Typography>
                            </Box>

                            <Typography variant="h6" gutterBottom>
                                Адрес
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                ...
                            </Typography>

                            <Typography variant="h6" gutterBottom>
                                Контактная информация
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                ...
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" gutterBottom>
                                Выберите ребенка
                            </Typography>
                            <Box sx={{ marginBottom: 2 }}>
                                {childrens.map(child => <ChildrenButton key={child.id} child={child} />)}
                            </Box>
                        </Grid>
                    </Grid>
                    <a href="https://intexpro.net/pg/страница-оплаты/" target='_blank' >
                        <Button variant="contained" color="primary">
                            Оплатить занятия
                        </Button>
                    </a>
                </>

            )}
        </div>

    );
};


export default observer(ProfilePage);