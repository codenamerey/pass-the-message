import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import UserContext from '@/context/UserContext';
import Header from '@/components/Header';
import { useState } from 'react';
import { User } from '@/interfaces/types.js';

export default function App({ Component, pageProps }: AppProps) {

  const [user, setUser] = useState<User | null>();

  return (
    <UserContext.Provider value={{...user, setUser}}>
      <ChakraProvider>
        <main className=' flex flex-col bg-gradient-to-br from-fuchsia-800 to-fuchsia-400 min-h-screen'>
          <Header />
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </UserContext.Provider>
  )
}
