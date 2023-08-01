import { Input } from '../../UI/Input/Input';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { charactersActions } from '../../../store/slice/charactersSlice';

export const SearchName = () => {
    const dispatch = useAppDispatch();
    const value = useAppSelector((state) => state.characters.name);

    const onChange = (name: string) => {
        dispatch(charactersActions.setName(name));
    };

    return (
        <div>
            <p>Name</p>
            <Input placeholder='Enter name' onChange={onChange} value={value} />
        </div>
    );
};
