import Button from '@/components/Button/SubmitButton'
export default function Playlist(){
    return( 
    <div>
        <Button variant="return" text="" to="/profile" onClick={()=>{}}/>
        <article key={i} className="bg-white shadow p-4 rounded">
                <img src={album.cover} alt={album.title} className="h-48 w-full object-cover rounded mb-2" />
                <h3 className="font-semibold text-lg">{album.title}</h3>
                <p className="text-sm text-gray-600">{album.artist} · {album.year}</p>
              </article>
        </div>
)}
