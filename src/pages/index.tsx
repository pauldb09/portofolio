import { DecoratedText } from "@/components/DecoratedLink";
import Link from "next/link";
import { useEffect, useState } from "react";
import { words, projects, socialsLinks } from "@/lib/data";
import { SetupApp } from "@/lib/functions";
import { useRouter } from "next/router";
const timeline = [
    {
        name: "First coding experience",
        description: "During the pandemic, I attended math classes over Discord where I was first introduced to coding. It was there that I discovered a brand new world!",
        date: "March 2020",
        dateTime: "2021-08",
    },

    {
        name: "Creating Green-bot",
        description: "After creating some small bots with my friends as a hobby, I decided to create one on my own. To my surprise, it became a huge success with 40 million users!",
        date: "Dec 2021",
        dateTime: "2022-02",
    },
    {
        name: "Attending Harvard's CS50",
        description: "I attended the well-known CS50 course online, which allowed me to enhance all the knowledge I gained through my self-learning experience.",
        date: "Jul 2022",
        dateTime: "2021-12",
    },
    {
        name: "Company management",
        description: "I am now managing Green-bot while studying. I have also bought a new bot to expand my business!",
        date: "Present",
        dateTime: "2022-12",
    },
];
let appLoaded = false;
export default function Example() {
    const [currentWord, setCurrentWord]: any = useState(words[0]);
    const router = useRouter();
    useEffect(() => {
        if (appLoaded) return;
        appLoaded = true;
        SetupApp(words, currentWord, setCurrentWord, router);
    }, [currentWord, router]);

    return (
        <main className="bg-black ">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-24 lg:px-8">
                <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32 ">
                    <div className="mx-auto max-w-7xl ">
                        <div className=" relative isolate   px-6 pt-16  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    {currentWord},
                                    <br />
                                    I'm <DecoratedText link={"https://github.com/pauldb09"} word={"Pauldb09"}></DecoratedText>
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray">I'm a fullstack developer from France</p>
                                <br></br>
                                <div className="place-self-center flex -space-x-2 justify-center md:justify-start">
                                    {socialsLinks.map((social) => (
                                        <div key={social.id}>
                                            <Link href={social.link}>
                                                <img
                                                    className="hover:animate-none transition ease-in-out delay-0 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100 inline-block inline-block h-12 w-12 rounded-full "
                                                    src={social.image}
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                    <a href="#stats" className="text-base font-semibold leading-7 text-white">
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
                                    className="md:animate-bounce1 sd:animate-bounce1 overflow-hidden  hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
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
            <div className="bg-black1 py-24 sm:py-32" id="stats">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Coding is more than a hobby, it's a <DecoratedText word={"passion"}></DecoratedText>
                        </h2>{" "}
                        <br></br> <br></br> <br></br> <br></br>
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                            {timeline.map((item) => (
                                <div key={item.name}>
                                    <time dateTime={item.dateTime} className="flex items-center text-sm font-semibold leading-6 text-blue ">
                                        <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                            <circle cx={2} cy={2} r={2} fill="currentColor" />
                                        </svg>
                                        <a className="animate-pulse"> {item.date}</a>
                                        <div
                                            className="absolute -ml-2 h-px w-screen -translate-x-full bg-blue/10 sm:-ml-4 lg:static lg:ml-8 lg:-mr-6 lg:w-auto lg:flex-auto lg:translate-x-0"
                                            aria-hidden="true"
                                        />
                                    </time>
                                    <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{item.name}</p>
                                    <p className="mt-1 text-base leading-7 text-gray">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-white/5 to-black1 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            It's not always about <DecoratedText word={"luck"}></DecoratedText>.
                        </h2>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                        <div className="hover:animate-pulse hover:cursor-pointer hover:-translate-y-1 hover:scale-105 transition ease-in-out flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-white/30 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                            <p className="flex-none text-3xl font-bold tracking-tight text-white">3</p>
                            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                <p className="text-lg font-semibold tracking-tight text-white">Years of experience</p>
                                <p className="mt-2 text-base leading-7 text-gray">From 2020 to 2023! And still going!</p>
                            </div>
                        </div>
                        <div className="hover:animate-pulse hover:-translate-y-1 hover:scale-105 transition ease-in-out cursor-pointer flex flex-col-reverse justify-between gap-y-8 gap-x-16 rounded-2xl bg-yellow/70 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                            <p className="flex-none text-3xl font-bold tracking-tight text-white">60 million</p>
                            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                <p className="text-lg font-semibold tracking-tight text-white">Users using Green-bot or related services</p>
                                <p className="mt-2 text-base leading-7 text-gray">
                                    That huge number of users all accross the world has been maken bigger by the purchase of{" "}
                                    <a href="https://flantic.gg" target={"_blank"} rel="noreferrer" className="text-white">
                                        Flantic
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="hover:cursor-pointer hover:animate-pulse hover:-translate-y-1 hover:scale-105 transition ease-in-out  flex flex-col-reverse justify-between gap-y-8 gap-x-16 rounded-2xl bg-blue/70 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                            <p className="flex-none text-3xl font-bold tracking-tight text-white">400</p>
                            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                <p className="text-lg font-semibold tracking-tight text-white">Hours spent coding in 2022</p>
                                <p className="mt-2 text-base leading-7 text-gray">I'm always working on small funny scripts or creating brand new features for my projects!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black1">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8" id="about">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        I've worked on <DecoratedText word={"10+"}></DecoratedText> projects since <DecoratedText word={"2020"}></DecoratedText>
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray">Here are the most interesting ones :)</p>
                    <br></br> <br></br>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:cursor-pointer"
                            >
                                <div className="min-h-40 max-h-48 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 blur-1">
                                    <img src={project.imageSrc} alt={project.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                </div>
                                <div className="mt-4 flex justify-between hover:bg-black3 bg-black2 px-2 py-2 rounded-lg mt-1">
                                    <div>
                                        <h2 className="text-2xl text-white">
                                            <a href={project.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {project.name}
                                            </a>
                                            <br></br>
                                        </h2>
                                        <p className=" text-sm text-gray">
                                            {project.desc} <br></br> <br></br>
                                            Tech: {project.tech}
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
                            <p className="mt-4 text-lg leading-8 text-gray">I'm always open to new opportunities! Feel free to get in touch with me!</p>
                            <br></br>
                            <div className="flex -space-x-2 ">
                                {socialsLinks.map((social) => (
                                    <div key={social.id}>
                                        <Link href={social.link}>
                                            <img
                                                className="hover:cursor-pointer  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100 inline-block inline-block h-12 w-12 rounded-full "
                                                src={social.image}
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <br></br>
                            <p className="text-gray">
                                © {new Date().getFullYear()} Developed by <DecoratedText word={"Pauldb09"}></DecoratedText>
                            </p>
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
            </div>
        </main>
    );
}
