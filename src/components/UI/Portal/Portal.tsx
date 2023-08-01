import { ReactNode, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
}

export const Portal = (props: PortalProps) => {
    const { children } = props;

    const [container] = useState(() => document.createElement('div'));

    useEffect(() => {
        document.querySelector('.app')?.appendChild(container);
        return () => {
            document.querySelector('.app')?.removeChild(container);
        };
    }, [container]);

    return createPortal(children, container);
};