import '@/app/globals.css'
import Layout from '../layout';

export default function KPop() {
    const songs = [
      'Butter – BTS',
      'Kill This Love – BLACKPINK',
      'Gangnam Style – PSY',
    ];
    const albums = [
      {
        title: 'Map of the Soul: 7',
        artist: 'BTS',
        year: 2020,
        cover: 'https://tse4.mm.bing.net/th?id=OIP.pSsUsHF2rfFkq1s3bJmFSQHaKC&pid=Api&P=0&h=180',
      },
      {
        title: 'The Album',
        artist: 'BLACKPINK',
        year: 2020,
        cover: 'https://tse3.mm.bing.net/th?id=OIP.w6TLrPsf_0u3EmX2w43CKgHaHa&pid=Api&P=0&h=180',
      },
      {
        title: 'Eyes Wide Open',
        artist: 'TWICE',
        year: 2020,
        cover: 'https://images.genius.com/d26d09db919877ef5f10fb6fe0b901d0.1000x1000x1.png',
      },
    ];
  
    return (
        <Layout>
      <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-indigo-50 p-8">
        <h1 className="mb-6 text-center text-4xl font-extrabold text-purple-600">
          K-POP
        </h1>
        <section className="mx-auto mb-12 max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold text-indigo-700">
            Canciones destacadas
          </h2>
          <ul className="space-y-3 rounded-lg bg-white p-6 shadow">
            {songs.map((song, i) => (
              <li
                key={i}
                className="rounded-md bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-800 hover:bg-indigo-100"
              >
                {song}
              </li>
            ))}
          </ul>
        </section>
        <section className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-2xl font-semibold text-indigo-700">
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