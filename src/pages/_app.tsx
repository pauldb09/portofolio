import "../styles/globals.css";
import type { AppProps } from "next/app";
import MetaTags from "@/components/Sections/MetaTags";

const metaData = {
    title: "Pauldb09 - Portofolio",
    description: "Greetings stranger! This is just a website to introduce myseflf! Hope it finds you well!",
    url: "https://www.pauldb09.dev",
    image: "https://www.pauldb09.dev/avatar.gif",
    themeColor: "#15ADE2",
    keywords: "key1, key2, key3, key4, key5, key6",
    author: "Pauldb09",
    charSet: "utf-8",
    language: "English",
    icons: [
        {
            src: "https://avatars.githubusercontent.com/u/70904183?v=4",
            sizes: "32x32",
            type: "image/png",
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
