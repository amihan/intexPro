import s from './Profile.module.scss'
import avatar from '../../../assets/img/avatar.png'

const children = ['Василий', 'Татьяна']

const Profile = () => {
    return (
        <div className={s.profile}>
            <h2 className={s.profile__title}>Профиль</h2>
            <div className={s.profile__container}>
                <div className={`${s.profile__data} ${s.data}`}>
                    <div className={s.data__block}>
                        <img className={s.data__img} src={avatar} alt='avatar' />
                        <div className={s.data__info}>
                            <p className={`${s.data__surname} ${s.data__item}`}>Фамилия</p>
                            <p className={`${s.data__name} ${s.data__item}`}>Имя</p>
                            <p className={`${s.data__patronymic} ${s.data__item}`}>
                                Отчество
                            </p>
                            <p className={`${s.data__birth} ${s.data__item}`}>
                                Дата рождения
                            </p>
                        </div>
                    </div>
                    <p className={s.data__birthMobile}>
                        Дата рождения
                    </p>
                    <p className={s.data__login}>Логин</p>
                    <p className={s.data__password}>Пароль</p>
                    <div className={`${s.data__children} ${s.children}`}>
                        <p className={s.children__title}>Мои дети</p>
                        <div className={s.children__block}>
                            {children.map((kid, id) => (
                                <button className={s.children__item} key={id}>
                                    {kid}
                                </button>
                            ))}
                            {/* <button className={s.children__add}>
                                + <br /> добавить ребенка
                            </button> */}
                        </div>
                    </div>
                </div>

                <div className={`${s.profile__option} ${s.option}`}>

                    <div className={s.btn}>
                        {/* <button className={s.btn__item}>
                            Заказать справку на <br /> налоговый вычет
                        </button> */}
                        <a className={s.btn__item} href="src/components/layout/Profile/Profile" target='_blank' > Оплатить занятия</a>
                        <button className={s.btn__item}>Сохранить изменения</button>
                    </div>

                    {/* <div className={s.discount}>
                        <p className={s.discount__text}>Моя скидка</p>
                        <p className={s.discount__value}>10%</p>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Profile
