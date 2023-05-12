import s from './Lessons.module.scss'
import Lesson from './Lesson'
import { useEffect, useState } from 'react';
import { useData } from '../../../hooks/useData';
import { observer } from 'mobx-react-lite';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Modal, Paper, Typography, makeStyles } from '@material-ui/core';

// const lessons = [
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' },
//     { title: 'Занятие №1', data: '04.09.2021' }
// ]

// const useStyles = makeStyles((theme) => ({
//     title: {
//         textAlign: 'center',
//         marginTop: theme.spacing(1),
//         marginBottom: theme.spacing(1),
//     },
// }));


// const Lessons = () => {
//     const classes = useStyles();
//     const state = useData().storeLesson
//     const lessons = state.lessons
//     const courses = state.courses

//     useEffect(() => {
//         state.getCourses()
//     }, [])

//     return (
//         <div>
//             <Typography className={classes.title} variant="h4" component="h2">Занятия</Typography>

//             <div className={s.btns}>
//                 {state.isLoading ? <>Загрузка...</> : courses[1].map((course, index) => <button
//                     onClick={() => state.getLessons(course.id)}
//                     className={s.btns__item}
//                     key={index}>
//                     {course.namecourse}
//                 </button>)}

//             </div>
//             {state.isLoadingLessons ? <>Загрузка...</> : <div className={s.lessons}>
//                 <p className={s.lessons__name}>Занятия</p>
//                 <div className={s.lessons__container}>
//                     {lessons.map((lesson, index) => <Lesson key={lesson.id} index={index} {...lesson} />)}
//                 </div>

//             </div>}
//         </div>
//     )
// }



const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        cursor: 'pointer',
    },
    attended: {
        backgroundColor: '#c7ecc7',
    },
    notAttended: {
        backgroundColor: '#ffdada',
    },
    upcoming: {
        backgroundColor: '#f5f5f5',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4),
        outline: 'none',
        borderRadius: theme.spacing(1),
        maxWidth: 400,
    },
}));



const LessonDetailsModal = ({ open, onClose, lesson }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Детали занятия</DialogTitle>
            <DialogContent>
                <Typography variant="body1">
                    Номер занятия: {lesson.id}
                </Typography>
                <Typography variant="body1">
                    Дата: {lesson.date.toDateString()}
                </Typography>
                <Typography variant="body1">
                    Статус: {lesson.attended ? 'Присутствовал' : 'Отсутствовал'}
                </Typography>
                <Typography variant="body1">Тема занятия: {lesson.topic}</Typography>
                <Typography variant="body1">
                    Оценка за домашнее задание: {lesson.homeworkGrade}
                </Typography>
                <Typography variant="body1">
                    Оценка за занятие: {lesson.finalGrade}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Оценки по критериям:
                </Typography>
                <Typography variant="body1">
                    Пунктуальность: {lesson.criteria.punctuality}
                </Typography>
                <Typography variant="body1">
                    Поведение: {lesson.criteria.behavior}
                </Typography>
                <Typography variant="body1">
                    Активность: {lesson.criteria.activity}
                </Typography>
                <Typography variant="body1">
                    Задания: {lesson.criteria.assignments}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Закрыть
                </Button>
            </DialogActions>
        </Dialog>
    );
};



const Lessons = () => {
    const classes = useStyles();
    const [selectedGroup, setSelectedGroup] = useState('');
    const [selectedLesson, setSelectedLesson] = useState(null);

    const handleGroupSelection = (group) => {
        setSelectedGroup(group);
    };

    const handleLessonClick = (lesson) => {
        setSelectedLesson(lesson);
    };

    const handleCloseModal = () => {
        setSelectedLesson(null);
    };

    const getLessons = () => {
        // Здесь можно добавить логику получения данных занятий с сервера
        // В данном примере будем генерировать фейковые данные
        const lessons = [];

        for (let i = 1; i <= 25; i++) {
            const lessonDate = new Date(); // Здесь можно использовать даты с разными интервалами

            const randomValue = Math.random();
            let attended;

            if (randomValue < 0.3) {
                attended = false;
            } else if (randomValue < 0.7) {
                attended = true;
            } else {
                attended = null;
            }

            lessons.push({ id: i, date: lessonDate, attended, topic: `Тема занятия ${i}` });
        }

        return lessons;
    };

    const lessons = getLessons();

    return (
        <div>
            <Typography variant="h4" component="h2" gutterBottom>
                Занятия
            </Typography>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => handleGroupSelection('Группа А')}
            >
                Группа А
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => handleGroupSelection('Группа Б')}
            >
                Группа Б
            </Button>
            <Grid container spacing={2}>
                {lessons.map((lesson) => {
                    let colorClass;

                    if (lesson.attended === true) {
                        colorClass = classes.attended;
                    } else if (lesson.attended === false) {
                        colorClass = classes.notAttended;
                    } else {
                        colorClass = classes.upcoming;
                    }

                    return (
                        <Grid item xs={6} md={3} key={lesson.id}>
                            <Paper
                                elevation={3}
                                className={`${classes.paper} ${colorClass}`}
                                onClick={() => handleLessonClick(lesson)}>
                                <Typography variant="subtitle1">Занятие {lesson.id}</Typography>
                                <Typography variant="subtitle2">{lesson.date.toDateString()}</Typography>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>


            {/* <LessonDetailsModal
                open={Boolean(selectedLesson)}
                onClose={handleCloseModal} /> */}

            <Modal
                open={Boolean(selectedLesson)}
                onClose={handleCloseModal}
                className={classes.modal}
            >
                <div className={classes.modalContent}>
                    <Typography variant="h5" component="h3" gutterBottom>
                        Детали занятия
                    </Typography>
                    {selectedLesson && (
                        <div>
                            <Typography variant="body1">
                                Номер занятия: {selectedLesson.id}
                            </Typography>
                            <Typography variant="body1">
                                Дата: {selectedLesson.date.toDateString()}
                            </Typography>
                            <Typography variant="body1">
                                Статус: {selectedLesson.attended ? 'Присутствовал' : 'Отсутствовал'}
                            </Typography>
                            <Typography variant="body1">Тема занятия: {selectedLesson.topic}</Typography>
                            {/* Добавьте остальные поля для оценок и критериев */}
                        </div>
                    )}
                    <Button onClick={handleCloseModal}>Закрыть</Button>
                </div>
            </Modal>
        </div>
    );
};


export default observer(Lessons)
