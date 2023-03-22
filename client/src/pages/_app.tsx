import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <main className=' flex flex-col bg-gradient-to-br from-fuchsia-800 to-fuchsia-400 min-h-screen'>
        <Header />
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  )
}
