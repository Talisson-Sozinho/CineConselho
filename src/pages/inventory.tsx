import { GetStaticProps } from "next"
import Head from "next/head"

export default function inventory() {
  return (
    <>
      <Head>
        <title>Inventário | Conselho</title>
      </Head>
      <h1>Inventário</h1>
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