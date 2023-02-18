import s from './Payments.module.scss'

const Month = ({ month }) => {
    return (
        <button key={month} className={s.payments__item}>
            {month}
        </button>
    );
};

export default Month;