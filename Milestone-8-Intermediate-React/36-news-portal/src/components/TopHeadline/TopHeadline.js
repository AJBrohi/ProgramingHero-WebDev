import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b1abadfdd8184a1292092e9fc501a80f';
        fetch(url)
        .then(res=>res.json())
        .then(data => setArticles(data.articles))
    },[]);
    console.log(articles);
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;