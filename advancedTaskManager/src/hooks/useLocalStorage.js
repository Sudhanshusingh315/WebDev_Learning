import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const storedValueInLocalStorage = localStorage.getItem(key);
        if (storedValueInLocalStorage) {
            return JSON.parse(storedValueInLocalStorage);
        }
        return initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};
