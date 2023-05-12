import s from './Lessons.module.scss'
import Modal from './Modal/Modal';
import { useState } from 'react';


const Lesson = (props) => {
    let { datelesson, index, status } = props;
    const [modalActive, setModalActive] = useState(false);

    let isDisabled = false;
    let isVisiting = false;

    if (status === null) {
        isDisabled = true;
    }

    if (status === '+') {
        isVisiting = true
    } else isVisiting = false


    return (<>
        <button disabled={isDisabled} className={isVisiting ? `${s.lessons__item}` : `${s.lessons__item} ${s.lessons__item_red}`} onClick={() => setModalActive(true)}>
            <div >
                <p className={s.lessons__title}>Занятие №{++index}</p>
                <p className={s.lessons__data}>{datelesson.slice(0, 10)}</p>
            </div>
        </button>
        <Modal active={modalActive} setActive={setModalActive} {...props} index={index} />
    </>
    );
};

export default Lesson;