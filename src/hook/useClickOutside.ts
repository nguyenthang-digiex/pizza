import { RefObject, useEffect } from 'react';

/**
 * Custom hook to run callback
 * when user click outside ref element
 */

function useClickOutsideRef(ref: RefObject<HTMLDivElement>, fallback: () => void) {
    useEffect(() => {
        function handleClickOutside(this: Document, { target }: globalThis.MouseEvent): any {
            if (ref.current && !ref.current.contains(target as Node)) {
                fallback();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
}

export default useClickOutsideRef;
