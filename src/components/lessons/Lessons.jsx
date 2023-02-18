import s from './Lessons.module.scss'

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
                {lessons.map((lesson, id) => (
                    <div key={id} className={s.lessons__item}>
                        <p className={s.lessons__title}>{lesson.title}</p>
                        <p className={s.lessons__data}>{lesson.data}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Lessons
