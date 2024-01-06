import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const poppins = Poppins({weight: ["300", "400", "500", "600"], subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-screen w-screen ${poppins.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
