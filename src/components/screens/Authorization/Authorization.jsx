import React from 'react'
import s from './Authorization.module.scss'
import Layout from './../../layout/Layout';
import Header from '../../layout/Header/Header';
import { observer } from 'mobx-react-lite';
import authStore from './../../../store/authStore';



const Authorization = observer(() => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    return (
        <>
            <Header />
            <div className={s.authorization}>
                <div className={s.authorization__block}></div>
                <div className={s.authorization__container}>
                    <h2 className={s.authorization__title}>Вход в личный кабинет</h2>
                    <div className={s.login}>
                        <p className={s.login__text}>Email</p>
                        <input value={email} onChange={e => setEmail(e.target.value)} className={s.login__input} type='text' />
                    </div>
                    <div className={s.password}>
                        <p className={s.password__text}>Пароль</p>
                        <input value={password} onChange={e => setPassword(e.target.value)} className={s.password__input} type='text' />
                    </div>
                    <button className={s.authorization__btn} >Войти</button>
                    <button className={s.authorization__btn} >Зарегистрироваться</button>
                </div>
                <div className={s.authorization__block}></div>
            </div>
        </>
    )
})

export default Authorization
