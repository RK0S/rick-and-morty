export type Status = 'alive' | 'dead' | 'unknown' | 'all'
export type Gender = 'male' | 'female' | 'genderless' | 'unknown' | 'all'
export interface Placement {
    name: string;
    url: string;
}

export interface CharacterSchema {
    id: number;
    name: string;
    status: Omit<Status, 'all'>;
    species: string;
    type: string;
    gender: Omit<Gender, 'all'>;
    origin: Placement;
    location: Placement;
    image: string;
}

export interface CharactersSchema {
    characters: CharacterSchema[];
    isLoading: boolean;
    error?: string;

    page: number;
    totalPages: number;
    //Query params
    name: string;
    status: Status;
    species: string;
    type: string;
    gender: Gender;
}

interface InfoResponse {
    count: number;
    pages: number;
} 

export interface FetchCharactersResponse {
    info: InfoResponse;
    results: CharacterSchema[];
}

export type SelectType<T> = Option<T>[]

export interface Option<T> {
    value: T;
    text: string;
} 