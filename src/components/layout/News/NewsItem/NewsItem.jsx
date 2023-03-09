
import './NewsItem.scss'

const NewsItem = ({ data, text }) => {
    return (
        <div className='newsItem'>
            <p className='newsItem__data'>{data}</p>
            <p className='newsItem__text'>{text}</p>
        </div>
    )
}

export default NewsItem
