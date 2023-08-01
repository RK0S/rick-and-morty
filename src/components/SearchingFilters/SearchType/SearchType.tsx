import { Input } from '../../UI/Input/Input';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { charactersActions } from '../../../store/slice/charactersSlice';

export const SearchType = () => {
    const dispatch = useAppDispatch();
    const value = useAppSelector((state) => state.characters.type);

    const onChange = (type: string) => {
        dispatch(charactersActions.setType(type));
    };

    return (
        <div>
            <p>Type</p>
            <Input placeholder='Enter type' onChange={onChange} value={value} />
        </div>
    );
};
