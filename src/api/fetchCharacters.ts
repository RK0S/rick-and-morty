import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { charactersActions } from '../store/slice/charactersSlice';
import { RootState } from '../store/store';
import { CharacterSchema, FetchCharactersResponse } from '../types/character';

export const fetchCharacters = createAsyncThunk<CharacterSchema[], number, { state: RootState }>(
    'characters/fetchCharacters',
    async (page, thunkAPI) => {
        const { rejectWithValue, dispatch, getState } = thunkAPI;
        const { characters: { gender, type, species, name, status } } = getState();
        try {
            const response = await axios.get<FetchCharactersResponse>(
                'https://rickandmortyapi.com/api/character',
                {
                    params: {
                        gender: gender === 'all' ? '' : gender,
                        page,
                        type,
                        species,
                        name,
                        status: status === 'all' ? '' : status
                    }
                }
            );

            if (!response.data) {
                throw new Error();
            }

            dispatch(charactersActions.setTotalPage(response.data.info.pages))
            return response.data.results;
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
