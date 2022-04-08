import Image from "next/image";

import styles from './styles.module.scss'

export function Header() {

    return (
        <header className={styles.headerContainer} >
            <div className={styles.content} >
                <Image width={238} height={30} src="/logo.svg" alt="" />
            </div>
        </header>
    )
}
