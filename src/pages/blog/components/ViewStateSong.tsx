
"use client"

import { useSongContext } from "@/context/features/createSongContext";


export default function ViewStateSong () {


    const {song} = useSongContext();
    console.log("STATE OF THE SONG FROM BLOG PAGE: ", song);

    return(
        <div className="songs-Addeds-Container">
            <h2 className="titleNewSong">New song:</h2>
            <p className="song-added-input">{song.tittle}</p>
            <p className="song-added-input">{song.artist}</p>
            <p className="song-added-input">{song.album}</p>
            <p className="song-added-input">{song.year}</p>
        </div>
    );
} 