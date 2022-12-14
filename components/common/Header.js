import Link from "next/link"

export default function Header({ active }) {

    const styles = {
        header: '',
        container: 'container border-b-2 border-[#222]',
        content: 'p-6',
        nav: 'flex flex-row w-full place-items-center justify-center uppercase text-[1.25rem]',
        activeLink: 'text-[#fff222]',
        break: 'px-4 text-[1.25rem]',
    }

    const navLinks = [
        {
            name: 'Home',
            ref: '/',
            break: true,
        },
        {
            name: 'Feed',
            ref: '/feed/1',
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
                                    <div key={index} className="flex justify-center place-items-center">
                                        <Link href={item.ref}>
                                            <li className={active === item.name.toLowerCase() ? styles.activeLink : ''}>{item.name}</li>
                                        </Link>
                                        {
                                            item.break ? (
                                                <>
                                                    <p className={styles.break}>-</p>
                                                </>
                                            ) : (
                                                <></>
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}