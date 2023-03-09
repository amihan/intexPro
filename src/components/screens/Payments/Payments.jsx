import s from './Payments.module.scss';
import Month from './Month';


const month = ['Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май',];

const Payments = () => {
    return (
        <div className={s.payments}>
            <div className={s.payments__title}>Оплаты</div>
            <div className={s.payments__container}>
                {month.map((m, id) => <Month key={id} month={m} />)}
            </div>
        </div>
    );
};

export default Payments;
