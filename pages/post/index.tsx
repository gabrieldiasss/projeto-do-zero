import Head from "next/head";
import styles from './styles.module.scss'
import { FiClock, FiCalendar, FiUser } from 'react-icons/fi'
import Image from "next/image";

export default function Post() {

    return (

        <div>
            <Head>
                <title> Como utilizar hooks | Space Traveling </title>
            </Head>

            <main className={styles.container} >

                <img src="/Banner.png" alt="" />

                <article className={styles.post} >
                    <h1>Criando um app CRA do zero</h1>

                    <div className={styles.infosPosts}>
                        <div className={styles.info}>
                            <FiCalendar /> 19 Abr 2021
                        </div>

                        <div className={styles.info}>
                            <FiUser /> Danilo Vieira
                        </div>

                        <div className={styles.info}>
                            <FiClock /> 4 min
                        </div>
                    </div>

                    <div className={styles.content} >
                        <strong>Proin et varius</strong>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                            Nullam dolor sapien, vulputate eu diam at, condimentum hendrerit tellus. Nam facilisis sodales felis, pharetra pharetra lectus auctor sed.

                            Ut venenatis mauris vel libero pretium, et pretium ligula faucibus. Morbi nibh felis, elementum a posuere et, vulputate et erat. Nam venenatis.
                        </p>
                    </div>

                    <div className={styles.content} >
                        <strong>Proin et varius</strong>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                            Nullam dolor sapien, vulputate eu diam at, condimentum hendrerit tellus. Nam facilisis sodales felis, pharetra pharetra lectus auctor sed.

                            Ut venenatis mauris vel libero pretium, et pretium ligula faucibus. Morbi nibh felis, elementum a posuere et, vulputate et erat. Nam venenatis.
                        </p>
                    </div>
                </article>
            </main>
        </div>
    );
}
