import NextApp, { AppProps } from 'next/app';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { DefaultSeo } from 'next-seo';
import { withUrqlClient, NextUrqlAppContext } from 'next-urql';
import useSWR, { SWRConfig } from 'swr';
import { gqlFetcher } from '../lib/fetcher';

import theme from '../lib/theme';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <DefaultSeo
        titleTemplate={'%s | My Site'}
        description="A cool website"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://my-site.vercel.app/',
          site_name: 'My Site',
        }}
        // twitter={{
        //   handle: ‘@handle’,
        //   site: ‘@site’,
        //   cardType: ‘summary_large_image’,
        // }}
      />
      <SWRConfig
        value={{
          dedupingInterval: 1000,
          fetcher: gqlFetcher,
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Component {...pageProps} />
        </ThemeProvider>{' '}
      </SWRConfig>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;

// App.getInitialProps = async (ctx: NextUrqlAppContext) => {
//   const appProps = await NextApp.getInitialProps(ctx);
//   return { ...appProps };
// };

// const GRAPHQL_ENDPOINT = `http://localhost:3000/api/graphql`;
// export default withUrqlClient((_ssrExchange, _ctx) => ({
//   url: GRAPHQL_ENDPOINT,
//   fetch,
// }))(
//   // @ts-ignore
//   App
// );
