import { memo } from 'react';
import cls from './Button.module.css';
import { useAppDispatch } from './../../hooks/redux';
import { fetchCharacters } from './../../api/fetchCharacters';
import { charactersActions } from '../../store/slice/charactersSlice';



export const Button = memo(() => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(charactersActions.cleanCharacters());
        dispatch(fetchCharacters(1));
    }

    return (
        <div className={cls.wrapper}>
            <button onClick={onClick} className={cls.button}>Submit</button>
        </div>
    );
});
