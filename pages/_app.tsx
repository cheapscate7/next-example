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
                    content="Channable is the ultimate tool for feed management and PPC automation. Send your items to more than 2500 price comparison websites, affiliate platforms, and marketplaces, or generate ads for Google Ads and Microsoft Advertising."
                />
                <meta name="theme-color" content="#1b1a3a" />
                <link rel="manifest" href="/static/manifest.json" />
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
