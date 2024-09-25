import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import "@/styles/globals.css"; // Import your global styles

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}