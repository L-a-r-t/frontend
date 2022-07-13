import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'

export default function Header() {
    return (
        <header className={styles.container}>
            <nav className={styles.nav}>
                <div className={styles.navLeft}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about-us">
                        <a>About us</a>
                    </Link>
                    <Link href="/contact-us">
                        <a>Contact us</a>
                    </Link>
                </div>
                <Link href="/login">
                    <a className={styles.login}>Log in</a>
                </Link>
            </nav>
        </header>
    )
}