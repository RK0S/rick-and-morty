
import { ChooseGender } from './ChooseGender/ChooseGender';
import { ChooseStatus } from './ChooseStatus/ChooseStatus';
import cls from './ChoosingFilter.module.css';

export const ChoosingFilters = () => {

    return (
        <div className={cls.filters}>
            <ChooseStatus />
            <ChooseGender />
        </div>
    );
};
