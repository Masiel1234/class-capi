import { createContext, useState, useContext } from "react";


export type dataSong = {
    tittle: string;
    artist: string;
    album: string;
    year: number
}


export type stateType = {
    song: dataSong;
    addSong: (song: dataSong) => void;
    deleteSong: () => void;
}

const SongContext = createContext<stateType>({
    song: {
        tittle: "",
        artist: "",
        album: "",
        year: 0
    },
    addSong: () => {},
    deleteSong: () => {}
});


export function SongProvider({ children }: { children: React.ReactElement }):React.ReactElement {
    const [song, setSong] = useState<dataSong>({
        tittle: "",
        artist: "",
        album: "",
        year: 0
    });


    const addSong = (song:dataSong) => {
        setSong(song);
    } 

    const deleteSong = () => {
        setSong({
            tittle: "",
            artist: "",
            album: "",
            year: 0
        })
    }

    const initialState: stateType = {
        song,
        addSong,
        deleteSong
    }


    return(
        <SongContext.Provider value={initialState}>
            {children}
        </SongContext.Provider>
    )
}



export function useSongContext() {
    const context = useContext(SongContext);

    return context;
} 


export default SongContext;