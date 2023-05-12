import { Box, Card, CardContent, Grid, IconButton, Modal, Typography, makeStyles, styled } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const month = ['Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май',];

// const Payments = () => {

//     const classes = useStyles();
//     return (
//         <>
//             <Typography className={classes.title} variant="h4" component="h2">Оплаты</Typography>
//             <div className={s.payments}>
//                 <div className={s.payments__title}>Оплаты</div>
//                 <div className={s.payments__container}>
//                     {month.map((m, id) => <Month key={id} month={m} />)}
//                 </div>
//             </div>
//         </>

//     );
// };

const StyledCard = styled(Card)(({ theme, isPaid }) => ({
    cursor: 'pointer',
    transition: 'box-shadow 0.3s',
    '&:hover': {
        boxShadow: `0px 4px 10px ${theme.palette.primary.main}`,
    },
    backgroundColor: isPaid ? theme.palette.success.light : theme.palette.error.light,
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '8px',
}));

// const TransactionModal = ({ open, onClose, transaction }) => (
//     <Modal open={open} onClose={onClose}>
//         <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
//                 <Typography variant="h6" component="div">
//                     Информация о транзакции
//                 </Typography>
//                 <IconButton onClick={onClose}>
//                     {/* <CloseIcon /> */}
//                 </IconButton>
//             </Box>
//             <Typography variant="body1" gutterBottom>
//                 <strong>Дата:</strong> {transaction.date}
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//                 <strong>Сумма:</strong> {transaction.amount}
//             </Typography>
//         </Box>
//     </Modal>
// );



const Payments = () => {
    const paidMonths = [
        { month: 'Май', year: 2023, status: 'Оплачено', date: '10.05.2023', amount: 100 },
        { month: 'Июнь', year: 2023, status: 'Не оплачено', date: '', amount: 0 },
        { month: 'Июль', year: 2023, status: 'Не оплачено', date: '', amount: 0 },
        { month: 'Август', year: 2023, status: 'Оплачено', date: '15.08.2023', amount: 120 },
        { month: 'Сентябрь', year: 2023, status: 'Не оплачено', date: '', amount: 0 },
    ];

    const [openModal, setOpenModal] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    const handleOpenModal = (transaction) => {
        setSelectedTransaction(transaction);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Оплаченные месяцы
            </Typography>

            <Grid container spacing={2}>
                {paidMonths.map((month) => (
                    <Grid item xs={12} sm={6} md={4} key={`${month.month}-${month.year}`}>
                        <StyledCard isPaid={month.status === 'Оплачено'} onClick={() => handleOpenModal(month)}>
                            <StyledCardContent>
                                <Typography variant="h6" component="div">
                                    {month.month} {month.year}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Статус: {month.status}
                                </Typography>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>

            {/* <TransactionModal open={openModal} onClose={handleCloseModal} transaction={selectedTransaction} />         */}
        </div>
    );
};


export default Payments;
