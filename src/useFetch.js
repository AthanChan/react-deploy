import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error('could not fetch the data for that resource');
            }
            return res.json()
        })
        .then((data2) => {
            setData(data2);
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            setError(err.message);
            setIsPending(false);
        })
    }, [url]);

    return { data, isPending, error }
}
