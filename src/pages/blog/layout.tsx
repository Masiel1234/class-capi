import { useRouter } from "next/router";
import '@/app/globals.css'
import Button from '@/components/Button/SubmitButton'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    
        <div>
            <header className="bg-amber-600 text-white">
                <nav className="mx-auto max-w-7x1 px-4 sm:px-6 lg:px-8">
                    <ul className="flex flex-wrap items-center grap-6 py-4">
                        <li className="relative group">
                            <button className="flex items-center grap-1 font-semibold hover:text-indigo-200 focus:outline-none">
                                Category
                            </button>
                            <ul className="invisible absolute left-0 z-10 mt-2 w-40 rounded-lg bg-white py-2 text-gray-800 shadow-lg opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100"><button onClick={()=> router.push('/blog/1')}>pop</button></li>
                        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100"><button onClick={()=> router.push('/blog/2')}>rock</button></li>
                        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100"><button onClick={()=> router.push('/blog/3')}>k-pop</button></li>
                        <li className="cursor-pointer px-4 py-2 hover:bg-gray-100"><button onClick={()=> router.push('/blog/4')}>api</button></li>
                        <li><Button text="" variant="go" onClick={() => router.push('/blog/login')}></Button></li>
                        </ul>
                        </li>
                        </ul>
                </nav>
            </header>
            
            <main>
                {children}
            </main>
            
            <footer className="p-4 text-center text-sm text-gray-500">
            Canciones de pruebas 
            </footer>
        </div>
  );
}