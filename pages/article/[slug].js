import { extract } from 'article-parser'
import Layout from '../../components/layout';
import { parse } from 'node-html-parser';

export default function article({ article }) {

    return (
        <>
            <Layout active=''>
                <div className='articleDetails' dangerouslySetInnerHTML={{ __html: article.content }} />
            </Layout>
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

    if(response) {
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