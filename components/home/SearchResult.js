import React, { Suspense, useEffect, useState } from 'react'
import Article from '../../pages/feed/Article'
import Loading from '../../pages/article/Loading';

export default function SearchResult({ value }) {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        async function getData() {
            if (value.length > 3) {
                const articleList = await searchData(value).then(result => {
                    setArticles(result);
                })
            }
        }
        getData()
    }, [value])

    return (
        <Suspense fallback={<Loading />}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem] p-4'>
            {
                articles && articles.map((article, index) => {
                    return (
                        <Article article={article} key={index} />
                    )
                })
            }
        </div>
        </Suspense>
    )
}

const searchData = async (keyword) => {

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();

    const apiResponse = await fetch(
        `https://newsapi.org/v2/everything?q=${keyword}&from=${year}-${month}-${day}&pageSize=10&sortBy=popularity`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            }
        }
    );

    const apiJson = await apiResponse.json();

    const { articles } = apiJson

    return articles
}

