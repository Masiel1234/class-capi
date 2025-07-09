
const songs = [
  'Cha-La Head-Cha-La – *Dragon Ball Z*',
  'We Are! – *One Piece*',
  'Guren no Yumiya – *Attack on Titan*',
  'Haruka Kanata – *Naruto*',
  'Again – *Fullmetal Alchemist: Brotherhood*',
];

const albums = [
  {
    title: 'Dragon Ball Z Original Soundtrack',
    artist: 'Shunsuke Kikuchi',
    year: 1989,
    cover: 'https://m.media-amazon.com/images/I/81zYYzC2StL._SL1200_.jpg',
  },
  {
    title: 'One Piece Original Soundtrack',
    artist: 'Kohei Tanaka',
    year: 1999,
    cover: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
  },
  {
    title: 'Attack on Titan OST',
    artist: 'Hiroyuki Sawano',
    year: 2013,
    cover: 'https://m.media-amazon.com/images/I/91nAyoJdCvL._SL1500_.jpg',
  },
];

export default function Shonen() {
  return (
      <div className="min-h-screen bg-gradient-to-b from-orange-100 via-white to-red-50 p-8">
        <h1 className="mb-6 text-center text-4xl font-extrabold text-orange-600">
          Shonen
        </h1>

        <section className="mx-auto mb-12 max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold text-red-700">
            Openings icónicos
          </h2>
          <ul className="space-y-3 rounded-lg bg-white p-6 shadow">
            {songs.map((song, i) => (
              <li
                key={i}
                className="rounded-md bg-red-50 px-4 py-2 text-sm font-medium text-red-800 hover:bg-red-100"
              >
                {song}
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-2xl font-semibold text-red-700">
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
  );
}
