import Head from "next/head";
import styles from "./home.module.scss";

import { FiCalendar } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";

import { format, parseISO } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';

interface Posts {
	uid: string;
	first_publication_date: string;
	slug: string;
	data: {
		title: string;
		subtitle: string;
		author: string;
		
	};
}

interface PostsProps {
	response: {
		results: Posts[];
	}
}

export default function Home({ response }: PostsProps) {

	return (
		<div className={styles.container}>
			<Head>
				<title>Space Traveling</title>
			</Head>

			<main className={styles.containerPosts}>
				<div className={styles.posts}>
					{response.results.map((post, key) => (
						<Link key={key} href={`/post/${post.uid}`} passHref>
							<div className={styles.post}>
								<strong>{post.data.title}</strong>
								<p>{post.data.subtitle}</p>
								<div className={styles.infosPosts}>
									<div className={styles.info}>
										<FiCalendar /> {

											format(
												parseISO(post.first_publication_date),
												"dd MMM yyy",
												{ locale: ptBR }
											)

										}
									</div>

									<div className={styles.info}>
										<FiUser /> {post.data.author}
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</main>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const prismic = getPrismicClient();

	const response = await prismic.query(
		[Prismic.predicates.at("document.type", "posts")],
		{
			fetch: ["posts.title", "posts.subtitle", "posts.author"],
		}
	);

	console.log(JSON.stringify(response, null, 2));

	return {
		props: {
			response,
		},

		revalidate: 60 * 60 * 24, // 24 hours
	};
};
