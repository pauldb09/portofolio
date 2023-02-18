import "../styles/globals.css";
import type { AppProps } from "next/app";
import MetaTags from "@/components/Sections/MetaTags";

const metaData = {
    title: "Pauldb09 - Developer",
    description: "Im' not sure what this is for :)",
    url: "https://www.pauldb09.dev.com",
    image: "https://www.pauldb09.com/pdp.jpg",
    themeColor: "#ffffff",
    keywords: "key1, key2, key3, key4, key5, key6",
    author: "Pauldb09",
    charSet: "utf-8",
    language: "English",
    icons: [
        {
            src: "/images/favicon.ico",
            sizes: "32x32",
            type: "image/ico",
        },
    ],
};

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <MetaTags metaData={metaData} />
            <Component {...pageProps} />
        </>
    );
};

export default App;
