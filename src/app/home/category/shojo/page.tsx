
export default function Shojo() {
  const songs = [
    'For Fruits Basket – *Fruits Basket* (opening)',
    'Catch You Catch Me – *Cardcaptor Sakura* (opening)',
    'Sakura Kiss – *Ouran High School Host Club* (opening)',
    'Aitai – *Nana* (ending)',
    'Kimi ni Todoke – *Kimi ni Todoke* (theme)',
  ];

  const albums = [
    {
      title: 'Fruits Basket Soundtrack',
      artist: 'Masaru Yokoyama & others',
      year: 2019,
      cover: 'https://cdn.myanimelist.net/images/anime/1447/100522.jpg',
    },
    {
      title: 'Nana Original Soundtrack',
      artist: 'Olivia, Anna Tsuchiya',
      year: 2006,
      cover: 'https://m.media-amazon.com/images/I/61MZQya+GZL._SL1000_.jpg',
    },
    {
      title: 'Ouran High School Host Club OST',
      artist: 'Yoshihisa Hirano',
      year: 2006,
      cover: 'https://m.media-amazon.com/images/I/81g-3wEYx2L._AC_SL1500_.jpg',
    },
  ];

  return (
      <div className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-purple-50 p-8">
        <h1 className="mb-6 text-center text-4xl font-extrabold text-pink-600">
          Shojo
        </h1>

        <section className="mx-auto mb-12 max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold text-pink-800">
            Canciones destacadas
          </h2>
          <ul className="space-y-3 rounded-lg bg-white p-6 shadow">
            {songs.map((song, i) => (
              <li
                key={i}
                className="rounded-md bg-pink-50 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-100"
              >
                {song}
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-2xl font-semibold text-pink-800">
            Álbumes recomendados
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
