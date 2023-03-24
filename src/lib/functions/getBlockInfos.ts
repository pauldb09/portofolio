import { NextRouter } from "next/router";

export const getBlockInfos = async (words: string[], currentWord: string, setCurrentWord: Function, router: NextRouter) => {
    const plainFetch = await fetch(`../api/integrity`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    }).catch((error: Error) => {
        console.log("[Integrity Check] Critical API error encountered: " + error + "");
    });
    const { data } = plainFetch && (await plainFetch.json());
    if (!data || data.invalid) {
        router.push("/");
        console.log("[Debug] That ressource does not exist on the server ( site not found )");
    }
    return { fetchData: data };
};
