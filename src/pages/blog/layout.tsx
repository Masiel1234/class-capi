import React from "react"
import '@/app/globals.css'

interface LayoutProps{
    children: React.ReactNode;
}
export default function layout({ children }: LayoutProps){
    return(
        <div>
        <header className="bg-amber-600 text-white"> 
            <nav className="mx-auto max-w-7x1 px-4 sm:px-6 lg:px-8">
                <ul className="flex flex-wrap items-center grap-6 py-4">
                <ul>category
                    <li>pop</li>
                    <li>rock</li>
                    <li>k-pop</li>

                </ul>
                
                <li>random</li>
                <li>profile</li>
            </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer>
        </footer>
        </div>
    )
}