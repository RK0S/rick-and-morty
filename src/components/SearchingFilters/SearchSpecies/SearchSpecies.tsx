import { Input } from '../../UI/Input/Input';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { charactersActions } from '../../../store/slice/charactersSlice';

export const SearchSpecies = () => {
    const dispatch = useAppDispatch();
    const value = useAppSelector((state) => state.characters.species);

    const onChange = (species: string) => {
        dispatch(charactersActions.setSpecies(species));
    };

    return (
        <div>
            <p>Species</p>
            <Input placeholder='Enter species' onChange={onChange} value={value} />
        </div>
    );
};
