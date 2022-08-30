import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((err) =>
            console.error(
            `No se ha podido realizar la petición al servidor debido al error ${err}`
            )
        );
    }, [url]);

    return {
        data
    };
};

export default useFetch;