import { GetStaticProps } from "next"
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CineConselho</title>
      </Head>
      <h1>Hello world</h1>
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