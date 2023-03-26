import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import {
  Heading,
  Button,
  Icon
} from '@chakra-ui/react';
import { useEffect, useRef, useContext } from 'react';
import UserContext from '@/context/UserContext';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { fullname, setUser } = useContext(UserContext);
  const fetchUser = useRef(() => {

  });

  fetchUser.current = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/me`);
    const user = await res.json();
    return user
  }

  useEffect(() => {
    if( fullname ) return

    (async() => {
      const user = await fetchUser.current();
      setUser(user);

    })();
  }, []);

  return (
    <>
      <section className=' flex flex-col justify-center items-center grow text-center gap-y-4'>
      {!fullname &&
        <>
          <Heading color='whiteAlpha.600'>Relay your message to someone.</Heading>
          <Button colorScheme='whatsapp'>Register</Button>
          <Button colorScheme='messenger'>Register with Facebook</Button>
          <Button colorScheme='linkedin'>Register with Google</Button>
        </>  
          }

      {fullname &&
        <Heading>Welcome, {fullname}!</Heading>}
      </section>
    </>
  )
}
