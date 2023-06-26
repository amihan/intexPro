
import { Modal, Button, Typography, makeStyles, Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';



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

const Lesson = (props) => {
    const classes = useStyles()
    let { lesson, index } = props
    console.log('1 lesson', toJS(lesson))

    const [isVisibleModal, setVisibleModal] = useState(false)

    let colorClass;
    if (lesson.status === '+') {
        colorClass = classes.attended;
    } else if (lesson.status === null) {
        colorClass = classes.upcoming;
    } else {
        colorClass = classes.notAttended;
    }


    const handleOpenModal = () => {
        if (lesson.status) {
            setVisibleModal(true)
        }
    }

    let presence = false

    if (lesson.status === '+') {
        presence = true
    } else presence = false

    return (<>
        <Grid item xs={6} md={3}>
            <Paper
                elevation={3}
                className={`${classes.paper} ${colorClass}`}
                onClick={handleOpenModal}
            >
                <Typography variant="subtitle1">Занятие №{++index}</Typography>
                <Typography variant="subtitle2">{lesson.datelesson.slice(0, 10)}</Typography>
            </Paper>
        </Grid>

        <Modal
            open={isVisibleModal}
            onClose={() => setVisibleModal(false)}
            className={classes.modal}
        >
            <div className={classes.modalContent}>
                <Typography variant="h4" component="h3" gutterBottom>
                    Детали занятия
                </Typography>

                <div>
                    <Typography variant="h6">
                        Номер занятия: №{index}
                    </Typography>
                    <Typography variant="h6">
                        Тема занятия: {lesson.namelesson}
                    </Typography>
                    <Typography variant="h6">
                        Домашнее задание:{lesson.estimation_home ? lesson.estimation_home : 'no'}
                    </Typography>
                    <Typography variant="h6">
                        Оценка за занятие:{(lesson.punctuality + lesson.behaviour + lesson.activity + lesson.tasks) ? lesson.punctuality + lesson.behaviour + lesson.activity + lesson.tasks : 'no'}
                    </Typography>

                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Пунктуальность</TableCell>
                                    <TableCell align="right">Поведение</TableCell>
                                    <TableCell align="right">Активность</TableCell>
                                    <TableCell align="right">Задания</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        {lesson.punctuality ? lesson.punctuality : 'no'}/1
                                    </TableCell>
                                    <TableCell align="right">
                                        {lesson.behaviour ? lesson.behaviour : 'no'}/3
                                    </TableCell>
                                    <TableCell align="right">
                                        {lesson.activity ? lesson.activity : 'no'}/1
                                    </TableCell>
                                    <TableCell align="right">
                                        {lesson.tasks ? lesson.tasks : 'no'}/5
                                    </TableCell>

                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <Button onClick={() => setVisibleModal(false)}>Закрыть</Button>
            </div>
        </Modal>
    </>
    );
};

export default observer(Lesson);