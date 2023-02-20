export const setupApp = async (words: string[], currentWord: string, setCurrentWord: Function) => {
    let open_date = Date.now();
    let interval = setInterval(() => {
        const newWord = words.filter((word) => word !== currentWord)[Math.floor(Math.random() * (words.length - 1))];
        setCurrentWord(newWord);
    }, 3500);

    let fetchErrored = false;
    const integrityFetch = await fetch(`api/integrity`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    }).catch((error: Error) => {
        fetchErrored = true;
        console.log("[Integrity Check] Critical API error encountered: " + error + "");
    });
    const integrityData = integrityFetch && (await integrityFetch.json());

    let ready_date = Date.now();
    console.log(`[App Ready] Client-Side application loaded in ${ready_date - open_date}ms\n    Interval: ${interval}\n\nIntegrity data: ${fetchErrored ? "Data can't be retrieved" : integrityData}`);
    return { time: ready_date - open_date, integrity: { error: fetchErrored, data: fetchErrored ? "Data can't be retrieved" : integrityData } };
};
