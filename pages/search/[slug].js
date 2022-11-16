import React, { Suspense, useEffect, useState } from 'react'
import Article from '../../pages/feed/Article'
import Layout from '../layout';

export default function SearchResult({ articles }) {

    return (
        <Layout>
            <div className="p-8 flex justify-center flex-col place-items-center">
                <Suspense fallback={<p>Loading ...</p>}>
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
            </div>
        </Layout>
    )
}

export const getServerSideProps = async pageContext => {

    const keyword = pageContext.query.slug;

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

    return {
        props: {
            articles
        }
    }
}

