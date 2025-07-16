import type { AppProps } from 'next/app'
import '@/style/styles.css' 
import {SongProvider} from '@/context/features/createSongContext'

function MyApp({ Component, pageProps }: AppProps) {



  return (
    <>
    <SongProvider>
       <Component {...pageProps} />
    </SongProvider>
    </>
  )
}

export default MyApp
