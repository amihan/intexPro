import s from './Payments.module.scss';


const month = ['Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май',];

const Payments = () => {
    return (
        <div className={s.payments}>
            <div className={s.payments__title}>Оплаты</div>
            <div className={s.payments__container}>
                {month.map((m) => <div key={m} className={s.payments__item}>
                    {m}
                </div>
                )}
            </div>
        </div>
    );
};

export default Payments;
