import { QueryClient, QueryClientProvider } from "react-query";

import type { AppProps } from "next/app";
import DashboardLayout from "@/components/layout";
import { GlobalStyle } from "@/styles/global";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/styles/theme";
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

  return (
    <QueryClientProvider client={client}>
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Provider store={store}>
          <DashboardLayout>
            <Component {...props} />
          </DashboardLayout>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
