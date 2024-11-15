import "@/styles/modal-video.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Europe/Vienna"
      messages={pageProps.messages}
    >
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
      >
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{
            marginTop: '80px' // Add margin to push notifications below navbar
          }}
          toastOptions={{
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
