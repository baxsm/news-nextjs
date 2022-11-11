import { extract } from 'article-parser'
import Layout from '../../components/layout';

export default function article({ article }) {

    return (
        <>
            {
                article.content ? (
                    <Layout active=''>
                        <div className='articleDetails' dangerouslySetInnerHTML={{ __html: article.content.toString().replaceAll('class=', 'className=') }} />
                    </Layout>
                ) : (
                    <Layout active=''>
                        <div className='articleDetails' >
                            <p>Could not find suitable data</p>
                        </div>
                    </Layout>
                )
            }
        </>

    )
}

export const getServerSideProps = async pageContext => {
    const articleUrl = pageContext.query.slug.split('=')[1];
    if (!articleUrl) {
        return {
            props: {
                article: [],
            }
        }
    }

    const response = await extract(articleUrl)
        .then(article => { return article })
        .catch(err => { console.log(err) })

    if (response) {
        return {
            props: {
                article: response,
            }
        }
    }

    return {
        props: {
            article: [],
        }
    }
}