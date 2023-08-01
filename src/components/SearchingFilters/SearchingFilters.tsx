import cls from './SearchingFilters.module.css';
import { SearchName } from './SearchName/SearchName';
import { SearchSpecies } from './SearchSpecies/SearchSpecies';
import { SearchType } from './SearchType/SearchType';

export const SearchingFilters = () => {

    return (
        <div className={cls.filters}>
            <SearchName />
            <SearchSpecies />
            <SearchType />
        </div>
    );
};
