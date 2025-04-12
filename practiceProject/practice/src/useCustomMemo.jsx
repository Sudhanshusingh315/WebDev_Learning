import { useRef } from "react";

export default function useCustomMemo(cb, dependancyArry) {
    const ref = useRef({
        memorizedValue: undefined,
        lastDependency: undefined,
    });

    if (
        !ref.current.memorizedValue ||
        !areArrayEqual(ref.current.lastDependency, dependancyArry)
    ) {
        ref.current.memorizedValue = cb();
        ref.current.lastDependency = dependancyArry;
    }

    return ref.current.memorizedValue;
}

function areArrayEqual(prev, curr) {
    if (!prev || !curr || prev.length !== curr.length) {
        return false;
    }

    for (let i = 0; i < prev.length; i++) {
        if (prev[i] !== curr[i]) return false;
    }
    return true;
}
