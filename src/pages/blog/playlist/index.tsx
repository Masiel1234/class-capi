'use client'
import Button from '@/common/components/Button/SubmitButton'
import '@/pages/blog/category/pop';
export default function Playlist() {
  return (
    <div>
      <h1>Saved Songs</h1>
      <div className='boards-container'>
        <div className='board'>
          <p>Board 1</p>
          <div className='btn-add-contain'>
            <Button variant="add" text="add song" to="/blog" onClick={() => { }} />
          </div>

          <img src="https://i.pinimg.com/736x/68/8b/4c/688b4c9c7527fb8925a840c0cde72360.jpg" alt="img1" />
          <div className=''>Song Title</div>
          <div className=''>Song Artist</div>
        </div>
        <div className='board'>
          <p>Board 2</p>
          <div className='btn-add-contain'>
            <Button variant="add" text="add song" to="/blog" onClick={() => { }} />
          </div>

          <img src="https://i.pinimg.com/736x/ec/ce/60/ecce606803c0157558d32344d6cca9df.jpg" alt="img2" />
          <div className=''>Song Title</div>
          <div className=''>Song Artist</div>
        </div>
        <div className='board'>
          <p>Board 3</p>
          <div className='btn-add-contain'>
            <Button variant="add" text="add song" to="/blog" onClick={() => { }} />
          </div>
          <img src="https://i.pinimg.com/736x/9b/8b/12/9b8b12ebe5b3c6aa6efcac27f6a9c78d.jpg" alt="img3" />
          <div className=''>Song Title</div>
          <div className=''>Song Artist</div>
        </div>
      </div>
    </div>
  )
}
