import Head from "next/head";
import { Header } from "../components/Header";
import styles from "./home.module.scss";

import { FiCalendar } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import Link from "next/link";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Space Traveling</title>
			</Head>

			<Header />

			<main className={styles.containerPosts}>
				<div className={styles.posts}>
					<Link href={`post`}>
						<div className={styles.post} >
							<strong>Como utilizar Hooks</strong>
							<p>Pensando em sincronização em vez de ciclos de vida.</p>
							<div className={styles.infosPosts}>
								<div className={styles.info}>
									<FiCalendar /> 19 Abr 2021
								</div>

								<div className={styles.info}>
									<FiUser /> Danilo Vieira
								</div>
							</div>
						</div>
					</Link>

					<Link href={`post`} >
						<div className={styles.post} >
							<strong>Como utilizar Hooks</strong>
							<p>Pensando em sincronização em vez de ciclos de vida.</p>
							<div className={styles.infosPosts}>
								<div className={styles.info}>
									<FiCalendar /> 19 Abr 2021
								</div>

								<div className={styles.info}>
									<FiUser /> Danilo Vieira
								</div>
							</div>
						</div>
					</Link>

				</div>
			</main>
		</div>
	);
}
