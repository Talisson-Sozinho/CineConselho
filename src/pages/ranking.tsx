import { GetStaticProps } from "next"
import Head from "next/head"

export default function ranking() {
  return (
    <>
      <Head>
        <title>Ranking | Conselho</title>
      </Head>
      <h1>Ranking</h1>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return{
    props:{

    },
    revalidate: 60,
  }
}