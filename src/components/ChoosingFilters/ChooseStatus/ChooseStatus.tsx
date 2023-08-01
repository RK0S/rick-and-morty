import { useAppSelector } from '../../../hooks/redux';
import { charactersActions } from '../../../store/slice/charactersSlice';
import { SelectType, Status } from '../../../types/character';
import { useAppDispatch } from '../../../hooks/redux';
import { Select } from '../../UI/Select/Select';

const options: SelectType<Status> = [
    {
        value: 'alive',
        text: 'Alive'
    },
    {
        value: 'dead',
        text: 'Dead'
    },
    {
        value: 'unknown',
        text: 'Unknown'
    }
];

export const ChooseStatus = () => {
    const value = useAppSelector((state) => state.characters.status);
    const dispatch = useAppDispatch();

    const onChange = (status: Status) => {
        dispatch(charactersActions.setStatus(status));
    };

    return (
        <div>
            <Select options={options} onChange={onChange} value={value} />
        </div>
    );
};
