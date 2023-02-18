import NewsItem from "./NewsItem/NewsItem";
import './News.scss'

const news = [
    { data: '01 ноября 2021', text: 'Запускаем неделю интенсивов. Дизайн интерфейсов, чат боты и многое другое.' },
    { data: '20 октября 2021 - 22 октября 2021  ', text: 'Отмена занятий в связи с проведением форума «ИННОСИБ»' },
    { data: '4 сентября 2021', text: 'Старт занятий!' }
];

const News = () => {
    return (
        <div className='news'>
            <p className="news__title">Новости</p>
            {news.map((n, id) => <NewsItem key={id} data={n.data} text={n.text} />)}
        </div>
    );
};

export default News;