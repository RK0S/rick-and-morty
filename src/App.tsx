import { Title } from './components/Title/Title';
import { Button } from './components/Button/Button';
import { CharactersList } from './components/CharactersList/CharactersList';
import { ChoosingFilters } from './components/ChoosingFilters/ChoosingFilters';
import { SearchingFilters } from './components/SearchingFilters/SearchingFilters';
import './styles/index.css';

export const App = () => {
    return (
        <div className='app'>
            <div className='container'>
                <Title />
                <SearchingFilters />
                <ChoosingFilters />
                <Button />
                <CharactersList />
            </div>
        </div>
    );
};
