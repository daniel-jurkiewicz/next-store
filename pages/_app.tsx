import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <p className="text-5xl font-bold text-red-400 text-center rounded-3xl border-8 border-green-700 mt-6 p-10 shadow-lg">
                Siemano, Mordeczki!
            </p>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
