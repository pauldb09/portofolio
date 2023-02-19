import { DecoratedText } from "@/components/DecoratedLink";
import { useEffect, useState } from "react";

const words = ["Uhh", "Well", "??!", "👀👀"];

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
                                    {currentWord}
                                    <br />
                                    You are <DecoratedText word={"lost"}></DecoratedText>
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

            <div className="curv-img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
                    <path fill="#000" d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"></path>
                </svg>
            </div>
        </main>
    );
}
