import NewsItem from "./NewsItem/NewsItem";
import './News.scss'
import Layout from './../../layout/Layout';

const news = [
    { data: '01 ноября 2021', text: 'Запускаем неделю интенсивов. Дизайн интерфейсов, чат боты и многое другое.' },
    { data: '20 октября 2021 - 22 октября 2021  ', text: 'Отмена занятий в связи с проведением форума «ИННОСИБ»' },
    { data: '4 сентября 2021', text: 'Старт занятий!' }
];

const News = () => {
    return (
        <Layout>
            <div className='news'>
                <p className="news__title">Новости</p>
                {news.map((n, id) => <NewsItem key={id} data={n.data} text={n.text} />)}
            </div>
        </Layout>
    );
};

export default News;