import Link from "next/link"

export default function Header() {

  const styles = {
    header: '',
    container: 'container ',
    content: 'p-6',
    nav: 'flex flex-row gap-[1rem] w-full place-items-center justify-center uppercase text-[1.25rem]',
    activeLink: 'text-[#9999]',
    break: 'px-4 text-[2rem]',
  }

  const navLinks = [
    {
      name: 'Home',
      ref: '/',
      break: true,
    },
    {
      name: 'Feed',
      ref: '/',
      break: false,
    },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ul className={styles.nav}>
            {
              navLinks.map((item, index) => {
                return (
                  <>
                    <Link key={index} href={item.ref}>
                      <li className={styles.activeLink}>{item.name}</li>
                    </Link>
                    {
                      item.break ? (
                        <>
                          <p className={styles.break}>|</p>
                        </>
                      ) : (
                        <></>
                      )
                    }
                  </>
                )
              })
            }
          </ul>
        </div>
      </div>
    </header>
  )
}