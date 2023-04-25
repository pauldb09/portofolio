import "../styles/globals.css";
import type { AppProps } from "next/app";
import MetaTags from "@/components/Sections/MetaTags";

const metaData = {
    title: "Pauldb09 - Portofolio",
    description: "Hey! I'm Pauldb09, a fullstack developer working on several projects online, i've created this website to introduce myself",
    url: "https://www.pauldb09.dev",
    image: null,
    themeColor: "#15ADE2",
    keywords: "paul, dev, ",
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
