export interface show{
    id: number;
    title: string;
    description: string;
    image: string; 
}

export interface season{
    id: number;
    title: string;
    image: String;
    episodes: Episode[];
}

export interface Episode {
    id: number;
    file: string;
    title: string;
}

export interface Genre{
    id: number;
    title: string;
    description: string;
    showIds: number[];
}    

export interface Preview{
    id: number;
    title: string;
    description: string;
    image: string;
    seasons: number;
    genreIds: number[];
    updated: string;
    
}