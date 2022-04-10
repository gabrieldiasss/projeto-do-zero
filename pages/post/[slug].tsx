import Head from "next/head";
import styles from "./styles.module.scss";

import { FiClock, FiCalendar, FiUser } from "react-icons/fi";

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { getPrismicClient } from "../../services/prismic";

import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface Post {
    first_publication_date: string;
    data: {
        title: string;
        author: string;
        content: {
            heading: string;
            body: {
                text: string;
            }[];
        }[];
    };

}

interface PostProps {
    response: Post;
    formattedDate: string;
}

export default function Post({ response, formattedDate }: PostProps) {

    

   
    return (
        <div>
            <Head>
                <title> {response?.data.title} | Space Traveling </title>
            </Head>

            <main className={styles.container}>
                <img src="/Banner.png" alt="" />

                <article className={styles.post}>
                    <h1>{response?.data.title}</h1>

                    <div className={styles.infosPosts}>
                        <div className={styles.info}>
                            <FiCalendar /> {formattedDate}
                        </div>

                        <div className={styles.info}>
                            <FiUser /> {response?.data.author}
                        </div>

                        <div className={styles.info}>
                            <FiClock /> 4 min
                        </div>
                    </div>

                    {response?.data.content.map((value, key) => (
                        <div key={key} className={styles.content}>
                            <strong>{value.heading}</strong>

                            {value.body.map((value, key) => (
                                <div key={key} >
                                    <div
                                        className={styles.textContent}
                                        dangerouslySetInnerHTML={{
                                            __html: value.text
                                        }}
                                    />

                                    {/* <p>{value.text}</p> */}

                                </div>

                            ))}

                        </div>
                    ))}
                </article>
            </main>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
) => {
    const prismic = getPrismicClient();

    const { slug } = context.params!;

    const response = await prismic.getByUID("posts", String(slug), {});



    const formattedDate = format(
        parseISO(response.first_publication_date!),
        "dd MMM yyy",
        { locale: ptBR }
    )
    return {
        props: {
            response,
            formattedDate
        },
        revalidate: 60 * 60 * 24,
    };
};
