import React, { useEffect, useState } from 'react'
import Article from '../../pages/feed/Article'

export default function SearchResult({ value }) {

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getData() {
            if (value.length > 3) {
                const articleList = await searchData(value).then(result => {
                    setArticles(result);
                    setIsLoading(false);
                })
            }
        }
        getData()
    }, [value])

    if (isLoading) {
        return (
            <div className='w-full flex justify-center place-items-center p-[4rem]'>
                <p>Loading ...</p>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem] p-4'>
            {
                articles && articles.map((article, index) => {
                    return (
                        <Article article={article} key={index} />
                    )
                })
            }
        </div>
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

