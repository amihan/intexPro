import './Modal.scss'

const Modal = (props) => {
    const { namelesson, homework, status, punctuality,
        behaviour, activity, tasks, estimation_home, index, datelesson } = props;


    let presence = false

    if (status === '+') {
        presence = true
    } else presence = false


    return (
        <div className='modal' >
            <div className='modal__content'>

                <div className="modal__lesson">
                    <p className="modal__time">Занятие №{index} Дата:{datelesson.slice(0, 10)}</p>
                    <div className='modal__presence' ><p className={presence ? 'modal__presence-text active' : 'modal__presence-text'}>{presence ? 'ПРИСУТСТВОВАЛ' : 'ОТСУТСТВОВАЛ'}</p></div>
                </div>

                <p className='modal__namelesson'>Тема занятия: {namelesson} </p>
                <p className='modal__estimation-home'>
                    <span>Домашнее задание:{homework}</span>
                    <span className='block-marks'>{estimation_home ? estimation_home : 'no'}</span>
                </p>
                <p className='modal__marks'>
                    <span className='modal__marks-text'>Оценка за занятие: </span>
                    <span className='block-marks'>{(punctuality + behaviour + activity + tasks) ? punctuality + behaviour + activity + tasks : 'no'}
                    </span>
                </p>

                <div className='marks'>
                    <table className='table'>
                        <tr className='table__row'>
                            <td className='table__col'>Пунктуальность</td>
                            <td className='table__col'>{punctuality ? punctuality : 'no'}/1</td>
                        </tr>
                        <tr className='table__row'>
                            <td className='table__col'>Поведение</td>
                            <td className='table__col'>{behaviour ? behaviour : 'no'}/3</td>
                        </tr>
                        <tr className='table__row'>
                            <td className='table__col'>Активность</td>
                            <td className='table__col'>{activity ? activity : 'no'}/1</td>
                        </tr>
                        <tr className='table__row'>
                            <td className='table__col'>Задания</td>
                            <td className='table__col'>{tasks ? tasks : 'no'}/5</td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Modal;