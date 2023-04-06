import { QueryClient, QueryClientProvider } from "react-query";

import type { AppProps } from "next/app";
import DemoLayout from "@/components/layout/Demo";
import { GlobalStyle } from "@/styles/global";
import { Provider } from "react-redux";
import ReactModal from "react-modal";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import UserProvider from "@/containers/auth/UserProvider";
import { lightTheme } from "@/styles/theme";
import { useEffect } from "react";
import { wrapper } from "@/stores";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") {
        ReactModal.setAppElement("body");
      }
    };
  }, []);

  return (
    <QueryClientProvider client={client}>
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Provider store={store}>
          <UserProvider>
            <DemoLayout>
              <Component {...props} />
            </DemoLayout>
          </UserProvider>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
