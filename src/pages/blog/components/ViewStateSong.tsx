
"use client"

import { useSongContext } from "@/context/features/createSongContext";


export default function ViewStateSong () {


    const {song} = useSongContext();
    console.log("STATE OF THE SONG FROM BLOG PAGE: ", song);

    return(
        <div>
            <h2>New song:</h2>
            <p>{song.tittle}</p>
            <p>{song.artist}</p>
            <p>{song.album}</p>
            <p>{song.year}</p>
        </div>
    );
} 