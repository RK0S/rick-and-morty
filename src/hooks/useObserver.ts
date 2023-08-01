import {useEffect, useRef} from "react";

export const useObserver = (ref: any, canLoad: boolean, isLoading: boolean, callback: () => void) => {
    const observer = useRef<IntersectionObserver>();

    useEffect(() => {
        if(isLoading || !ref.current) return;
        if(observer.current) observer.current.disconnect();

        var cb = function(entries: any[]) {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [callback, canLoad, isLoading, ref])
}