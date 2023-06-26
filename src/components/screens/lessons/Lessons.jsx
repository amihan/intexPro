import { useEffect, useState } from 'react';
import { useData } from '../../../hooks/useData';
import { observer } from 'mobx-react-lite';
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Modal, Paper, Typography, makeStyles } from '@material-ui/core';
import LessonButton from '../../UI/LessonButton';
import ChildrenButton from '../../UI/ChildrenButton';
import Lesson from './Lesson';


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


const Lessons = () => {
    const classes = useStyles();

    const { lessons, courses, getCourses, isLoading, activeCourse, getLessons } = useData().storeLesson
    const { сhildren, childrens, activeProfile } = useData().storeСhildren

    useEffect(() => {
        getLessons(сhildren.id, activeCourse)
    }, [activeCourse])

    useEffect(() => {
        getCourses(сhildren.id)
    }, [activeProfile])

    return (
        <div>
            <Typography variant="h4" component="h2" gutterBottom>
                Занятия
            </Typography>

            {isLoading ? <CircularProgress /> : <>
                <Box sx={{ marginBottom: 6 }}>
                    <Box sx={{ marginBottom: 6 }}>
                        <Typography variant="h6" component="span" gutterBottom>
                            Выберите ребенка:
                        </Typography>
                        {childrens.map((child, index) => <ChildrenButton key={index} child={child} />)}
                    </Box>

                    <Typography variant="h6" component="span" gutterBottom>
                        Выберите группу:
                    </Typography> {courses[1].map(course => <LessonButton key={course.id} course={course} />)}
                </Box>

                <Grid container spacing={2}>
                    {lessons.map((lesson, index) => <Lesson key={lesson.id} lesson={lesson} index={index} />)}
                </Grid>
            </>}



        </div>
    );
};


export default observer(Lessons)
