/* eslint-disable @next/next/no-img-element */

import moment from "moment/moment";
import Link from "next/link";

export default function Article({ article }) {

    console.log(article)

    const styles = {
        container: 'my-6 border-2 border-[#999999] p-4',
        header: 'pb-4 flex justify-between place-items-center',
        author: 'font-[500] text-[#858585]',
        articleOriginalLinkIcon: 'text-[#fff] hover:text-[#8989]',
        top: '',
        image: 'bg-[#75757575] w-[500px] h-[300px] object-cover',
        bottom: 'pt-4',
        sourceContainer: '',
        source: 'uppercase text-[1.25rem]',
        bottomStartContainer: 'flex justify-between place-items-center',
        dateContainer: '',
        date: 'text-[#FFE3D8] text-[0.6rem]',
        descriptionContainer: 'py-4 max-w-[500px] min-h-[80px]',
        description: 'text-center text-[0.8rem]',
        readMoreContainer: 'text-center',
        button: 'border-2 text-[1.5rem] border border-[#787878] px-6 py-4  w-full hover:border-[#ffff22] hover:text-[#000] hover:bg-white',
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.authorContainer}>
                    {
                        article?.author ? (
                            <h5 className={styles.author}>{article?.author}</h5>
                        ) : (
                            <h5 className={styles.author}>Unknown Author</h5>
                        )
                    }
                </div>
                {
                    article?.url ? (
                        <div className="articleOriginalLink">
                            <a href={article?.url} rel='noreferrer' target='_blank' className={styles.articleOriginalLinkIcon}><i className="fa-solid fa-arrow-up-right-from-square" /></a>
                        </div>
                    ) : <></>
                }
            </div>
            <div className={styles.top}>
                {
                    article?.urlToImage ? (
                        <img
                            src={article?.urlToImage}
                            width={500}
                            height={500}
                            alt='x'
                            loading="lazy"
                            className={styles.image}
                        />
                    ) : (
                        <img
                            src='/images/placeholder/placeholder-article.png'
                            width={500}
                            height={500}
                            alt='x'
                            loading="lazy"
                            className={styles.image}
                        />
                    )
                }
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomStartContainer}>
                    <div className={styles.sourceContainer}>
                        <h4 className={styles.source}>{article?.source?.name}</h4>
                    </div>
                    <div className={styles.dateContainer}>
                        <p className={styles.date}>Posted {moment(article?.publishedAt).fromNow()}</p>
                    </div>
                </div>
                {
                    article?.description ? (
                        <div className={styles.descriptionContainer}>
                            <p className={styles.description}>{article?.description.toString().substring(0, 150)}...</p>
                        </div>
                    ) : (
                        <div className={styles.descriptionContainer}>
                            <p className={styles.description}>No Description Given</p>
                        </div>
                    )
                }
                <div className={styles.readMoreContainer}>
                    <Link href={`/article/url=${encodeURIComponent(article?.url)}`}>
                        <button className={styles.button}>READ MORE</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
