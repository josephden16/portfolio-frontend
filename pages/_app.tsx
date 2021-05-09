import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { StrapiGlobalContext } from "../ts/interface";
import client from "../apollo-client";
import { gql } from "@apollo/client";
import "../styles/globals.css";
// import { fetchAPI } from "../lib/api";


// Store Strapi Global object in context
export const GlobalContext: StrapiGlobalContext | any = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;
  return (
    <>
      <Head>
        <link rel="shortcut icon" sizes="32x32" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949

const fetchGlobal = async () => {
  const { data } = await client.query({
    query: gql`
    query {
      global {
        id
        favicon {
          url
          width
          height
          alternativeText
        }
        siteName
        defaultSeo {
          id
          metaTitle
          metaDescription
          shareImage {
            url
            width
            height
            alternativeText
          }
        }
      }
    }
    `,
  })
  return data;
}

MyApp.getInitialProps = async (ctx: any) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const { global } = await fetchGlobal();
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
//TODO: Fix data fetching funciton above
