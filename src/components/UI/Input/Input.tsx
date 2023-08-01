import { ChangeEvent } from 'react';
import cls from './Input.module.css';

interface InputProps {
    onChange: (e: string) => void;
    value: string;
    placeholder: string;
}

export const Input = (props: InputProps) => {
    const { onChange, value, placeholder } = props;

    const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }

    return (
        <input placeholder={placeholder} className={cls.input} onChange={onHandleChange} type="text" value={value} />
    );
};
