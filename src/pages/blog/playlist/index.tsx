'use client'
import Button from '@/common/components/Button/SubmitButton'
export default function Playlist() {
  return (
    <div className='form-wrapper'>
      <h1 className='form-title'>Add New Song</h1>
      <form action="" className='form-container'>

        <label htmlFor="title" className='form-label'>Song Title:</label>
        <input type="text" name="title" id="" className='form-input'/><br />

        <label htmlFor="artist" className='form-label'>Artist</label>
        <input type="text" name="artist" id="" className='form-input'/><br />

        <label htmlFor="album" className='form-label'>Album</label>
        <input type="text" name="album" id="" className='form-input'/><br />

        <label htmlFor="year" className='form-label'>Year</label>
        <input type="number" name="year" id="" className='form-input'/><br />

        <Button variant="add" text="add song" to="/" onClick={() => { }} />
      </form>
    </div>
  )
}
