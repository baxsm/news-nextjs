export default function Footer() {

    const styles = {
      footer: 'border-[#656565] border-t-2 text-center p-4 mt-6',
    }
  
    return (
      <>
        <footer className={styles.footer}>
          <a href="https://github.com/baxm" rel="noreferrer" target='_blank' className="font-bold hover:text-[#ffff99]">&copy; <i>B A X S M</i></a>
        </footer>
      </>
    )
  }