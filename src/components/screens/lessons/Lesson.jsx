import s from './Lessons.module.scss'
import Layout from './../../layout/Layout';

const Lesson = ({ id, lesson }) => {
    return (
        <button key={id} className={s.lessons__item}>
            <p className={s.lessons__title}>{lesson.title}</p>
            <p className={s.lessons__data}>{lesson.data}</p>
        </button>
    );
};

export default Lesson;