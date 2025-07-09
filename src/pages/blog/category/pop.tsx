import '@/app/globals.css'
import Layout from '../layout';
const songs = [
    'Blinding Lights – The Weeknd',
    'Levitating – Dua Lipa',
    'As It Was – Harry Styles',
];
const albums = [
    { title: 'Future Nostalgia', artist: 'Dua Lipa', year: 2020, cover: 'https://cdn.hmv.com/r/w-1280/hmv/files/fc/fca8e447-10d0-45c3-b722-ed4da65741ec.jpg',},
    { title: '1989',             artist: 'Taylor Swift', year: 2014 , cover: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9ea4955a-e07a-4df5-9082-13e73c7c3fbf/dgcnqq5-8a3cc709-6ef1-4c76-830a-857361c1c28b.png/v1/fill/w_894,h_894/1989_taylor_s_version_album_cover_by_dash1023_dgcnqq5-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzllYTQ5NTVhLWUwN2EtNGRmNS05MDgyLTEzZTczYzdjM2ZiZlwvZGdjbnFxNS04YTNjYzcwOS02ZWYxLTRjNzYtODMwYS04NTczNjFjMWMyOGIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WAgOhZDkrcd9YFMIvqOPGwIZOUnGU_W9by62nmUfQzg', },
    { title: 'After Hours',      artist: 'The Weeknd',   year: 2020 ,cover: 'https://i.redd.it/y8e2ns5e45o41.jpg',},
  ];
export default function Pop() {
    return(
        <Layout>
        <div className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-indigo-50 p-8">
        <h1 className="mb-6 text-center text-4xl font-extrabold text-pink-600">
          POP
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
        <section className="mx-auto max-w-5xl">
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
    ) 
  }