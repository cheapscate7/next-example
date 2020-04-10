import React from 'react';
import Head from 'next/head';
import { GlobalStyle, ThemeMain } from '../components/StyledComponents';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';

const app = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="Description"
                    content="Personal website for Matthew Badcock, also a nextjs example"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="theme-color" content="#fffffe" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <ThemeProvider theme={ThemeMain}>
                <GlobalStyle />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </React.Fragment>
    );
};

// Wraps all components in the tree with the data provider
export default app;
