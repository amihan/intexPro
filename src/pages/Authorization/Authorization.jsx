import React from 'react'
import s from './Authorization.module.scss'

const Authorization = () => {
    return (
        <div className={s.authorization}>
            <div className={s.authorization__block}></div>
            <div className={s.authorization__container}>
                <h2 className={s.authorization__title}>Вход в личный кабинет</h2>
                <div className={s.login}>
                    <p className={s.login__text}>Логин</p>
                    <input className={s.login__input} type='text' />
                </div>
                <div className={s.password}>
                    <p className={s.password__text}>Пароль</p>
                    <input className={s.password__input} type='text' />
                </div>
                <button className={s.authorization__btn}>Войти</button>
            </div>
            <div className={s.authorization__block}></div>
        </div>
    )
}

export default Authorization
