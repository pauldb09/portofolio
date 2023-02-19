import { DecoratedText } from "@/components/DecoratedLink";
import { useEffect, useState } from "react";

const words = ["Hey", "Hello", "Bonjour", "Buongiorno", "Guten Tag"];
const products = [
    {
        id: 1,
        name: "Green-bot",
        href: "https://green-bot.app",
        imageSrc: "/images/greenbot.png",
        imageAlt: "image",
        tech: "Typescript, MongoDB, NextJS, Kotlin, Java",
        desc: "I founded Green-bot back in 2020 as a hobby and now it's a company serving more than 30 millions users wroldwide on the social netword Discord™ ",
    },
    {
        id: 1,
        name: "Social Manager",
        href: "https://github.com/pauldb09/Social-Manager",
        imageSrc: "/images/socialmanager.png",
        imageAlt: "image",
        desc: "Another discord that sends messages when a new youtube video/tweet/tiktok is posted. Also helped to moderate online communities ( Some of the biggest). Stopped due to lack of time",
        tech: "Typescript, MongoDB",
    },
    {
        id: 1,
        name: "Tutos Du Web",
        href: "https://github.com/pauldb09/tutos-du-web",
        imageAlt: "image",

        imageSrc: "/images/tdw.png",
        desc: "A very complete website for coding tutorials, with account creating and ability to write tutorials. Used to have 200 tutorials written by the community and more than 1000 registred users. ",
        tech: "PHP, SQL, Html, Css, VanillaJS, Bootstrap",
    },

    {
        id: 1,
        name: "Github Projects",
        href: "https://github.com/pauldb09",
        imageAlt: "image",

        imageSrc: "/images/github-octocat.png",
        desc: "I've also made several open source projects or scripts on my github profile",
        tech: "Javascript, Typescript, ExpressJS, mongoDB",
    },
];
let appLoaded = false;
export default function Example() {
    let open_date = Date.now();

    const [currentWord, setCurrentWord]: any = useState(words[0]);

    useEffect(() => {
        if (appLoaded) return;
        appLoaded = true;
        let interval = setInterval(() => {
            const newWord = words.filter((word) => word !== currentWord)[Math.floor(Math.random() * (words.length - 1))];
            setCurrentWord(newWord);
        }, 3500);
        let ready_date = Date.now();
        console.log(`Client-Side application loaded in ${ready_date - open_date}ms\nApp Loaded: ${appLoaded}\nInterval: ${interval}`);
    }, [open_date, currentWord]);

    return (
        <main className="bg-black">
            <div className="mx-auto max-w-7xl py-32 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <svg className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6" viewBox="0 0 1155 678" fill="none">
                            <path
                                fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
                                fillOpacity=".3"
                                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                            />
                            <defs>
                                <linearGradient id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#15ADE2" />
                                    <stop offset={1} stopColor="#15ADE2" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className=" relative isolate  bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    {currentWord},
                                    <br />
                                    I'm <DecoratedText word={"Pauldb09"}></DecoratedText>
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray">I'm a backend developer from France 👌</p>
                                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                    <a href="#about" className="text-base font-semibold leading-7 text-white">
                                        <span aria-hidden="true">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="56"
                                                height="56"
                                                fill="#fff"
                                                className="motion-safe:animate-bounce text-base font-semibold leading-7 text-white-900 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="relative mt-16 h-80 lg:mt-8">
                                <img
                                    className="overflow-hidden animate-bounce1 hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                    src="/images/hero.png"
                                    alt="App screenshot"
                                    width={1524}
                                    height={880}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="curv-img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
                    <path fill="#1a1919eb" d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"></path>
                </svg>
            </div>
            <div className="bg-black1">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8" id="about">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        I've worked on <DecoratedText word={"10+"}></DecoratedText> projects since <DecoratedText word={"2020"}></DecoratedText>
                    </h2>
                    <br></br>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="group relative transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:cursor-pointer"
                            >
                                <div className="min-h-40 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between hover:bg-black3 bg-black2 px-2 py-2 rounded-lg mt-1">
                                    <div>
                                        <h2 className="text-2xl text-white">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                            <br></br>
                                        </h2>
                                        <p className=" text-sm text-gray">
                                            {product.desc} <br></br> <br></br>
                                            Tech: {product.tech}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get in Touch.</h2>
                            <p className="mt-4 text-lg leading-8 text-gray">I'm always open to new opportunities! Feel free to get in touch wiht me!</p>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <dt className="mt-4 font-semibold text-white">E-mail</dt>
                                <dd className="mt-2 leading-7 text-gray">
                                    You can <DecoratedText word={"send me a mail"} link={"mailto:pro@pauldb09.dev&subject=Hi"}></DecoratedText> and I'll answer you!
                                </dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <dt className="mt-4 font-semibold text-white">Discord</dt>
                                <dd className="mt-2 leading-7 text-gray">
                                    You can also reach me on discord <DecoratedText word={"here"} link={"https://discord.com/users/688402229245509844"}></DecoratedText>.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <svg className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6" viewBox="0 0 1155 678" fill="none">
                    <path
                        fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
                        fillOpacity=".3"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                        <linearGradient id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#15ADE2" />
                            <stop offset={1} stopColor="#15ADE2" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </main>
    );
}
