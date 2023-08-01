import { CharactersItemProps } from './CharactersItem';
import cls from './CharactersItem.module.css';



export const ModalItem = ({ character }: CharactersItemProps) => {
    const { gender, image, location, name, origin, species, status, type } = character;

    return (
        <div className={[cls.card, cls.notPointer].join(' ')}>
            <img className={cls.img} src={image} alt="avatar" />
            <h3>{name}</h3>
            <p>Status: {status}</p>
            <p>Gender: {gender}</p>
            <p>Last known location: {location.name}</p>
            <p>Origin: {origin.name}</p>
            {species && <p>Species: {species}</p>}
            {type && <p>Type: {type}</p>}
        </div>
    );
};
