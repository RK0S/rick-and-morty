import { ReactNode, useCallback, useEffect } from 'react';
import { Portal } from '../Portal/Portal';
import { useMount } from '../../../hooks/useMount';

import cls from './Modal.module.css';

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
    isOpened: boolean;
}

interface KeyboardEvent {
    key: string;
}

export const Modal: React.FC<ModalProps> = (props) => {
    const { children, onClose, isOpened } = props;
    const isMounted = useMount({ isOpened });

    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpened) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpened, onKeyDown]);

    if (!isMounted) {
        return null;
    }

    const toClose = isMounted && !isOpened;

    const classes = [
        cls.content,
        Boolean(toClose) ? cls.closing : '',
        Boolean(isOpened) ? cls.opening : ''
    ]

    return (
        <Portal>
            <div className={cls.modal}>
                <div
                    className={cls.overlay}
                    role='button'
                    onClick={onClose}
                />
                <div className={classes.join(' ')}>{children}</div>
            </div>
        </Portal>
    );
};