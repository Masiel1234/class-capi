import '@/app/globals.css'
import Layout from '../layout';
export default function Rock() {
    const songs = [
      'Bohemian Rhapsody – Queen',
      'Smells Like Teen Spirit – Nirvana',
      'Enter Sandman – Metallica',
    ];
  
    const albums = [
      {
        title: 'Nevermind',
        artist: 'Nirvana',
        year: 1991,
        cover: 'https://coverartarchive.org/release/e8228687-12b8-406e-b4f6-b9fbcc9fcf8d/20393097771-1200.jpg',
      },
      {
        title: 'Back in Black',
        artist: 'AC/DC',
        year: 1980,
        cover: 'https://upload.wikimedia.org/wikipedia/commons/9/92/ACDC_Back_in_Black.png',
      },
      {
        title: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        year: 1973,
        cover: 'https://www.fddb.org/wp-content/uploads/img_poster_fulldome_show_pink_floyd_the_dark_side_of_the_moon_3acf725753-scaled.jpg',
      },
    ];
  
    return (  
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-red-100 via-white to-yellow-50 p-8">
      
        <h1 className="mb-6 text-center text-4xl font-extrabold text-red-600">
          ROCK
        </h1>
        <section className="mx-auto mb-12 max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold text-yellow-800">
            Canciones destacadas
          </h2>
          <ul className="space-y-3 rounded-lg bg-white p-6 shadow">
            {songs.map((song, i) => (
              <li
                key={i}
                className="rounded-md bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-900 hover:bg-yellow-100"
              >
                {song}
              </li>
            ))}
          </ul>
        </section>
  
        
        <section className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-2xl font-semibold text-yellow-800">
            Álbumes esenciales
          </h2>
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {albums.map((album, i) => (
              <article
                key={i}
                className="overflow-hidden rounded-lg bg-white shadow transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={album.cover}
                  alt={album.title}
                  className="h-64 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{album.title}</h3>
                  <p className="text-sm text-gray-600">
                    {album.artist} · {album.year}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
       </Layout>
    );
  }