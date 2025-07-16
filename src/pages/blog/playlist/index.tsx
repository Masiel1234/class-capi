'use client'

import Button from '@/common/components/Button/SubmitButton'
import createSongContext, { useSongContext } from '@/context/features/createSongContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';




export default function Playlist() {

  const { song, addSong } = useSongContext();
  const router = useRouter();
  let tittle: string = "";
  let artist: string = "";
  let album: string = "";
  let year: number = 0;


  const handleCreateSong = () => {
    addSong({tittle, artist, album, year});

    console.log("STATE OF SONG: ", song);
  }




  return (
    <div className='form-wrapper'>
      <h1 className='form-title'>Add New Song</h1>
      <form action="" className='form-container' onSubmit={(e) => e.preventDefault()}>

        <label htmlFor="title" className='form-label'>Song Title:</label>
        <input type="text" name="title" id="" className='form-input' onChange={(e) => tittle = e.target.value} />

        <label htmlFor="artist" className='form-label'>Artist</label>
        <input type="text" name="artist" id="" className='form-input' onChange={(e) => artist = e.target.value} />

        <label htmlFor="album" className='form-label'>Album</label>
        <input type="text" name="album" id="" className='form-input' onChange={(e) => album = e.target.value} />

        <label htmlFor="year" className='form-label'>Year</label>
        <input type="number" name="year" id="" className='form-input' onChange={(e) => year = Number.parseInt(e.target.value)} />

        <Button variant="add" text="add song" to="/" onClick={() => {
          handleCreateSong()
          router.push("/blog");
        }} />
      </form>
    </div>
  )
}
