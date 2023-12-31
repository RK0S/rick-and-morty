import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { charactersReducer } from './slice/charactersSlice';


const rootReducer = combineReducers({
    characters: charactersReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];