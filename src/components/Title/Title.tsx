import { memo } from "react";
import cls from './Title.module.css';

export const Title = memo(() => {
    return (
        <div className={cls.title}>
            <h1>Rick and Morty</h1>
        </div>
    );
});
