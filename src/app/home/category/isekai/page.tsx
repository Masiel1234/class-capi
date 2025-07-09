'use client'

export default function Isekai() {
  const songs = [
    'This Game – No Game No Life',
    'Redo – Re:Zero kara Hajimeru Isekai Seikatsu',
    'Unravel – Tokyo Ghoul (aunque no es isekai, es muy popular)',
    'Over the Sky – Isekai Shokudou',
    'Isekai wa Smartphone to Tomo ni – Opening',
  ];

  const albums = [
    {
      title: 'No Game No Life Original Soundtrack',
      artist: 'Super Sweep',
      year: 2014,
      cover: 'https://m.media-amazon.com/images/I/81qH2bB-qZL._SL1500_.jpg',
    },
    {
      title: 'Re:Zero Soundtrack',
      artist: 'Kenichiro Suehiro',
      year: 2016,
      cover: 'https://cdn.myanimelist.net/images/anime/11/79410.jpg',
    },
    {
      title: 'That Time I Got Reincarnated as a Slime OST',
      artist: 'Elements Garden',
      year: 2018,
      cover: 'https://m.media-amazon.com/images/I/81TxFnfDQbL._AC_SL1500_.jpg',
    },
  ];

  return (
      <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-indigo-50 p-8">
        <h1 className="mb-6 text-center text-4xl font-extrabold text-purple-600">
          Anime Isekai
        </h1>
        

        <section className="mx-auto mb-12 max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold text-indigo-700">
            Openings populares
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
            Álbumes recomendados
          </h2>

          <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
            
            
            
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
  
  );
}
