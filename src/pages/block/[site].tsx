import { DecoratedText } from "@/components/DecoratedLink";
import { SetupApp } from "@/lib/functions";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

let appLoaded = false;

export default function Example() {
    const router = useRouter();

    const { site } = router.query;
    useEffect(() => {
        if (appLoaded) return;
        appLoaded = true;
        SetupApp([], "currentWord", () => null, router);
    }, [router]);

    return (
        <main className="bg-black">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-24 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-12">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className=" bg-gray-900 px-6 pt-16">
                            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-12 lg:text-left">
                                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                                    <span className="text-3xl font-bold tracking-tight text-gray sm:text-4xl">Error 501</span>
                                    <br></br>
                                    <br></br>
                                    You have been blocked from accessing <DecoratedText link={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} word={site}></DecoratedText>
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray">
                                    Your ip adress has been flagged as suspicous by our anti bot algorithm, please wait a few minutes or contact the site owner
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 text-white flex items-center justify-center gap-x-6">
                Protection provided by Green-bot™ . Green-bot is not affiliated with {site}
                <a href="//www.dmca.com/Protection/Status.aspx?ID=4c046004-1ab5-4a39-b60b-cb5f2b92ff12" title="DMCA.com Protection Status" className="dmca-badge">
                    {" "}
                    <img src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=4c046004-1ab5-4a39-b60b-cb5f2b92ff12" alt="DMCA.com Protection Status" />
                </a>
                <Script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"></Script>
            </div>
        </main>
    );
}
