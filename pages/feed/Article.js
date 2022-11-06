import Image from "next/image";

export default function Article({ article }) {

    const { author, content, description, publishedAt, source, title, url, urlToImage } = article;

    const styles = {
        container: 'my-6',
        top: '',
    }

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <img
                    src={urlToImage}
                    width={500}
                    height={500}
                    alt='x'
                    loading="lazy"
                />
                <div className={styles.buttonContainer}>

                </div>
            </div>
            <div className={styles.bottom}>

            </div>
        </div>
    )
}
