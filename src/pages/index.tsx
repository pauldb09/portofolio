import { useEffect, useState } from "react";

export default function Example() {
    let open_date = Date.now();
    const [appLoaded, setAppLoaded]: any = useState(false);

    useEffect(() => {
        if (appLoaded) return;
        setAppLoaded(true);
        let ready_date = Date.now();
        console.log(`Client-Side application loaded in ${ready_date - open_date}ms\nApp Loaded: ${appLoaded}`);
    }, [appLoaded, open_date]);

    return <p>Nope you can't access that page</p>;
}
