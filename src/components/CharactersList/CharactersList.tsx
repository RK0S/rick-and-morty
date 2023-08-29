import { useEffect, useRef, useCallback } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { CharactersItem } from './CharactersItem/CharactersItem';
import cls from './CharactersList.module.css';
import { fetchCharacters } from './../../api/fetchCharacters';
import { useAppDispatch } from './../../hooks/redux';
import { useObserver } from './../../hooks/useObserver';
import { charactersActions } from '../../store/slice/charactersSlice';

export const CharactersList = () => {
    const dispatch = useAppDispatch();
    const characters = useAppSelector((state) => state.characters.characters);
    const isLoading = useAppSelector((state) => state.characters.isLoading);
    const error = useAppSelector((state) => state.characters.error);
    const page = useAppSelector((state) => state.characters.page);
    const totalPages = useAppSelector((state) => state.characters.totalPages);
    const lastElement = useRef<any>()

    useEffect(() => {
        dispatch(fetchCharacters(page));
    }, [page, dispatch]);

    const canLoad = page < totalPages

    const addCharacters = useCallback(() => {
        dispatch(charactersActions.setPage(page + 1))
    }, [dispatch, page]);

    useObserver(lastElement, canLoad, isLoading, addCharacters);

    if (error) {
        return (
            <div className={cls.wrapper}>
                <h2>Произошла ошибка при загрузке героев</h2>
                <h3>Попробуйте ввести по-другому</h3>
            </div>
        );
    }

    return (
        <div className={cls.list}>
            {characters.map((c) => (
                <CharactersItem character={c} key={c.id} />
            ))}
            {Boolean(characters.length) && <div className={cls.ref} ref={lastElement}></div>}
            {isLoading && (
                <div className={cls.wrapper}>
                    <h2>Loading...</h2>
                </div>
            )}
        </div>
    );
};
