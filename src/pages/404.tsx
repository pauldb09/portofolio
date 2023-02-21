import { DecoratedText } from "@/components/DecoratedLink";
import { SetupApp } from "@/lib/functions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const words = ["Uhh", "Well", "??!", "👀👀"];

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
        <main className="bg-black">
            <div className="mx-auto max-w-7xl py-32 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className=" relative isolate  bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    {currentWord}
                                    <br />
                                    You are <DecoratedText link={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} word={"lost"}></DecoratedText>
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray">This is a wild and dangerous place to be</p>
                            </div>

                            <div className="relative mt-16 h-80 lg:mt-8">
                                <img
                                    className="overflow-hidden rotate-3 hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                    src="/images/404.png"
                                    alt="App screenshot"
                                    width={1524}
                                    height={880}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
