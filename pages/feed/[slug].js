import Heading from '../../components/common/Heading';
import Layout from '../../components/layout'
import Article from './Article';


export default function feed({ pageNumber, articles }) {
    console.log(articles)

    const styles = {
        feed: 'flex justify-center place-items-center flex-col',
        articlesContainer: 'grid grid-cols-1 md:grid-cols-2 gap-[2rem] p-4'
    }

    return (
        <>
            <Layout active='feed'>
                <section className={styles.feed}>
                    <Heading title='Latest Feed' subtitle='Check out the Latest Articles' />
                    <div className={styles.articlesContainer}>
                    {
                        articles.map((item, index) => {
                            return (
                                <>
                                    <Article article={item} key={index}/>
                                </>
                            )
                        })
                    }
                    </div>
                </section>
            </Layout>
        </>
    )
}

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug;
    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1
            }
        }
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=6&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            }
        }
    );

    const apiJson = await apiResponse.json();

    const { articles } = apiJson;

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber),
        }
    }
}
