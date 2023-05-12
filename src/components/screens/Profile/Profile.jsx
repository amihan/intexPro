import avatar from '../../../assets/img/avatar.png'
import { useEffect, useState } from 'react';
import { useData } from '../../../hooks/useData';
import { NavLink, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Box, Button, Typography, makeStyles } from '@material-ui/core';




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



const Profile = () => {
    const classes = useStyles();

    const state = useData().storeСhildren
    const { id } = useParams();

    const { fio, contract, dateBirth, datepay, parent } = state.сhildren

    const [surname, name, patronymic] = fio.split(' ')

    useEffect(() => {
        if (id === undefined) {
            console.log('id undefined')
        } else {
            state.getOneProfile(id)
        }
    }, [id])

    useEffect(() => {
        state.getProfile()
    }, [])


    return (
        <Box>
            <Typography className={classes.title} variant="h4" component="h2">Профиль</Typography>


            <div>
                <div>
                    <Typography>Фамилия: {surname}</Typography>
                    <Typography>Имя: {name}</Typography>
                    <Typography>
                        Отчество: {patronymic}
                    </Typography>
                    <Typography>
                        Дата рождения: {dateBirth}
                    </Typography>
                    {/* <Typography>Логин</Typography>
                <Typography>Пароль</Typography> */}
                </div>


                <div>
                    <Typography>Мои дети</Typography>
                    <div>
                        {state.childrens.map((kid, id) => (
                            <NavLink to={`/profile/${kid.id}`}
                                // className={({ isActive }) => isActive ? `${s.children__item} ${s.active}` : `${s.children__item}`}
                                key={id}>
                                {kid.fio} <br />
                                {kid.id}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>

            <Box>

                <Box>
                    <a href="https://intexpro.net/pg/страница-оплаты/" target='_blank' >
                        <Button variant="contained" color="primary">
                            Оплатить занятия
                        </Button>
                    </a>
                </Box>

            </Box>

        </Box>

    )
}

export default observer(Profile);
