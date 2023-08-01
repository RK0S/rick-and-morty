import { useAppSelector } from '../../../hooks/redux';
import { charactersActions } from '../../../store/slice/charactersSlice';
import { Gender, SelectType } from '../../../types/character';
import { useAppDispatch } from '../../../hooks/redux';
import { Select } from '../../UI/Select/Select';

const options: SelectType<Gender> = [
    {
        value: 'female',
        text: 'Female'
    },
    {
        value: 'male',
        text: 'Men'
    },
    {
        value: 'genderless',
        text: 'Genderless'
    },
    {
        value: 'unknown',
        text: 'Unknown'
    }
];

export const ChooseGender = () => {
    const value = useAppSelector((state) => state.characters.gender);
    const dispatch = useAppDispatch();

    const onChange = (gender: Gender) => {
        dispatch(charactersActions.setGender(gender));
    };

    return (
        <div>
            <Select options={options} onChange={onChange} value={value} />
        </div>
    );
};
