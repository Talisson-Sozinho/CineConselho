import { GetStaticProps } from "next"
import Head from "next/head"

export default function Bilheteria() {
  return (
    <>
    <Head>
      <title>Bilheteria | Conselho</title>
    </Head>
    <h1>Bilheteria</h1>
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