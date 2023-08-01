import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharactersSchema, Gender, Status, CharacterSchema } from '../../types/character';
import { fetchCharacters } from './../../api/fetchCharacters';

const initialState: CharactersSchema = {
    isLoading: false,
    error: undefined,
    characters: [],
    gender: 'all',
    name: '',
    page: 1,
    totalPages: 1,
    species: '',
    status: 'all',
    type: ''
};

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setGender: (state, action: PayloadAction<Gender>) => {
            state.gender = action.payload
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setTotalPage: (state, action: PayloadAction<number>) => {
            state.totalPages = action.payload
        },
        setSpecies: (state, action: PayloadAction<string>) => {
            state.species = action.payload
        },
        setStatus: (state, action: PayloadAction<Status>) => {
            state.status = action.payload
        },
        setType: (state, action: PayloadAction<string>) => {
            state.type = action.payload
        },
        cleanCharacters: (state) => {
            state.characters = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCharacters.fulfilled, (state, action: PayloadAction<CharacterSchema[]>) => {
            state.isLoading = false;
            state.error = undefined;
            state.characters = [...state.characters, ...action.payload];
        });
        builder.addCase(fetchCharacters.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        });
    }
});

export const { reducer: charactersReducer, actions: charactersActions } = charactersSlice;