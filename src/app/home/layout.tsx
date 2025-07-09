'use client';

import { useRouter } from "next/navigation";
import { VidasProvider } from '@/app/home/context/VidasContext';
import Vidas from '@/app/home/components/MostrarVidas'
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
     <VidasProvider>
      <Vidas/>
    <div>
      <header className="bg-amber-600 text-white">
        <nav className="mx-auto max-w-7x1 px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center grap-6 py-4">
            <li className="relative group">
              <button className="flex items-center grap-1 font-semibold hover:text-indigo-200 focus:outline-none">
                Category
              </button>
              <ul className="invisible absolute left-0 z-10 mt-2 w-40 rounded-lg bg-white py-2 text-gray-800 shadow-lg opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                  <button onClick={() => router.push('/home/category/1')}>isekai</button>
                </li>
                <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                  <button onClick={() => router.push('/home/category/2')}>shonen</button>
                </li>
                <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                  <button onClick={() => router.push('/home/category/3')}>shojo</button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="p-4 text-center text-sm text-gray-500">
        Trivia De Anime Pruebas
      </footer>
    </div>
    </VidasProvider>
  );
}
