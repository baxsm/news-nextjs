import Layout from '../../components/layout'

export default function feed({pageNumber, articles}) {

    return (
        <>
            <Layout active='feed'>
                <h5>FEED</h5>
            </Layout>
        </>
    )
}

const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug;
    if(!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1
            }
        }
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            }
        }
    );

    const apiJson = await apiResponse.json();
}
