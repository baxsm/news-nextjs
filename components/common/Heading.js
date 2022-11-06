export default function Heading({title, subtitle}) {

    const styles = {
        heading: 'text-center my-6 uppercase',
        title: 'text-[2rem]',
        subtitle: 'text-[0.8rem] text-[#787878]',
    }

  return (
    <div className={styles.heading}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  )
}
