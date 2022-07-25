import "../styles/globals.scss";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../configs/materialTheme/materialTheme";
import createEmotionCache from "../configs/Emotion/createEmotionCache";
import { useApollo } from "../apolloConfig/apollo.config";
import { useApolloB } from "../apolloConfig/blogConfig/apolloBlog.config";
import { createWrapper } from "next-redux-wrapper";
import { ApolloProvider } from "@apollo/client";
import store from "../Redux/Store/store";
import { Provider } from "react-redux";
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
const clientSideEmotionCache = createEmotionCache();
type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
};
function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout || ((page) => page);
  const client = useApollo(pageProps.initialApolloState);
  const clientB = useApolloB(pageProps.initialApolloStateB);
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </CacheProvider>
      </Provider>
    </ApolloProvider>
  );
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
