import {useEffect, useState} from "react";

const useScrollEvent = (): boolean => {
    const [scroll, setScroll] = useState<number>(0);

    useEffect(() => {
        function handleScroll() {
            setScroll(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return scroll > 0;
}

export default useScrollEvent;