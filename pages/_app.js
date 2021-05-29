import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import Router from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', (url) => {
	console.log(`Loading: ${url}`);
	NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const GlobalStyle = createGlobalStyle`
	body{
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	  font-family: Poppins, sans-serif;
	  overflow-x: hidden;
	  width:100vw;
	  min-width: 100%;
	  font-size:18px;
	}
	h1, p {
		margin:0;
	}
`;
const theme = {
	colors: {
		primary: '#0070f3',
	},
};

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Kevin Barbosa</title>
				<link rel="icon" href="/images/favicon-bake.svg" type="image/svg" />
				<link rel="stylesheet" type="text/css" href="/nprogress.css"></link>
			</Head>
			<GlobalStyle></GlobalStyle>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</Layout>
	);
}
