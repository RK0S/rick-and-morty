import { memo, useState, useCallback } from 'react';
import { CharacterSchema } from '../../../types/character';
import cls from './CharactersItem.module.css';
import { Modal } from './../../UI/Modal/Modal';
import { ModalItem } from './ModalItem';

export interface CharactersItemProps {
    character: CharacterSchema;
}

export const CharactersItem = memo(({ character }: CharactersItemProps) => {
    const { image, location, name, status } = character;
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const onClose = useCallback(() => {
        setIsOpened(false);
    }, []);

    const onOpen = () => {
        setIsOpened(true);
    };

    return (
        <>
            <div onClick={onOpen} className={cls.card}>
                <img className={cls.img} src={image} alt='avatar' />
                <h3>{name}</h3>
                <p>Status: {status}</p>
                <p>Last known location: {location.name}</p>
            </div>
            <Modal isOpened={isOpened} onClose={onClose}>
                <ModalItem character={character} />
            </Modal>
        </>
    );
});
