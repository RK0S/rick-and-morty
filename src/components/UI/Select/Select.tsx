import { ChangeEvent } from 'react';
import { Gender, Option, Status } from '../../../types/character';
import cls from './Select.module.css';

interface SelectProps {
    options: Option<Status | Gender>[];
    onChange: (e: any) => void;
    value: string;
}

export const Select = (props: SelectProps) => {
    const { onChange, options, value } = props;

    const onHandleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    }

    return (
        <select className={cls.select} onChange={onHandleChange} value={value}>
            <option value='all'>All</option>
            {options.map(opt => 
                <option key={opt.value} value={opt.value}>{opt.text}</option>    
            )}
        </select>
    );
};
