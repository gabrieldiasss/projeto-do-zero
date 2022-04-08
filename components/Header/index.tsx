import Image from "next/image";
import Link from "next/link";

import styles from './styles.module.scss'

export function Header() {

    return (
        <header className={styles.headerContainer} >
            <div className={styles.content} >
                <Link href="/" passHref>
                    <Image width={238} height={30} src="/logo.svg" alt="" />
                </Link>
            </div>
        </header>
    )
}
