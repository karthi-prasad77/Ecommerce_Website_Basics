import { useState, useEffect } from "react";
import { Request } from "../Request";

export const useFetch = (url) => {
    // create usestate
    const [data, setData] = useState(null);
    const [loading, isLoading] = useState(false);
    const [error, isError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                isLoading(true);
                const response = await Request.get(url);
                console.log(response);
                setData(response.data.data);
            } catch (error) {
                isError(true);
            }
            isLoading(false);
        };
        // call fetchdata methof
        fetchData();
    }, [url]); // request single time
    return { data, loading, error };
};
