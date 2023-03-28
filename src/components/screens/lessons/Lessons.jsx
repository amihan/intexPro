import s from './Lessons.module.scss'
import Lesson from './Lesson'
import Layout from './../../layout/Layout';

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
        <Layout>
            <div className={s.lessons}>
                <p className={s.lessons__name}>Занятия</p>
                <div className={s.lessons__container}>
                    {lessons.map((lesson, id) => <Lesson key={id} lesson={lesson} id={id} />)}
                </div>
            </div>
        </Layout>

    )
}

export default Lessons
