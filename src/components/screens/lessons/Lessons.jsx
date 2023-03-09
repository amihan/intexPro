import s from './Lessons.module.scss'
import Lesson from './Lesson'

const lessons = [
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' },
    { title: 'Занятие №1', data: '04.09.2021' }
]


const Lessons = () => {
    return (
        <div className={s.lessons}>
            <p className={s.lessons__name}>Занятия</p>
            <div className={s.lessons__container}>
                {lessons.map((lesson, id) => <Lesson key={id} lesson={lesson} id={id} />)}
            </div>
        </div>
    )
}

export default Lessons
