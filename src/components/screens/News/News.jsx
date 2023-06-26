import { useEffect, useState } from "react";
import $api from "../../../http";
import { Title } from "@material-ui/icons";
import { Box, CircularProgress, Collapse, FormControl, InputLabel, List, ListItem, ListItemText, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography, makeStyles } from "@material-ui/core";
import { useData } from "../../../hooks/useData";
import { observer } from "mobx-react-lite";


const useStyles = makeStyles((theme) => ({
    row: {
        marginBottom: theme.spacing(1),
    },
    title: {
        textAlign: 'center',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },

}));


const News = () => {
    const classes = useStyles();

    const { news, getNews, isLoading } = useData().storeNews

    const [expandedNewsId, setExpandedNewsId] = useState(null);

    useEffect(() => {
        getNews()
    }, []);

    const handleNewsClick = (id) => {
        setExpandedNewsId(id === expandedNewsId ? null : id);
    };

    return (
        <div>
            <Typography variant="h4" component="h2" gutterBottom>
                Новости
            </Typography>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <List component="nav">
                    {news.map((news) => (
                        <div key={news.id}>
                            <ListItem button onClick={() => handleNewsClick(news.id)}>
                                <ListItemText primary={news.date} secondary={news.title} />
                            </ListItem>
                            <Collapse in={expandedNewsId === news.id}>
                                <Typography variant="h6" gutterBottom>
                                    {news.text}
                                </Typography>
                            </Collapse>
                        </div>
                    ))}
                </List>
            )}
        </div>
    );
};


export default observer(News);