import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import {
  Heading,
  Button,
  Image,
  Text
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
    if(res.status == 403) {
      const error = await res.json();
      return null
    }

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
      <section className=' flex flex-col justify-center items-center grow text-center gap-y-4 [&>button]:flex [&>button]:space-x-2'>
      {!fullname &&
        <>
          <Heading color='whiteAlpha.600'>Relay your message to someone.</Heading>
          <Button colorScheme='whatsapp'>Register</Button>
          <Button colorScheme='messenger' className='flex space-x-4 color-yellow-500'>
            <Image
              src='https://www.facebook.com/images/fb_icon_325x325.png'
              boxSize='25px'
              borderRadius='full'
            />
            <Text>Register with Facebook</Text>
          </Button>
          <Button colorScheme='gray'>
            <Image
              src='https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA'
              boxSize='25px'
              borderRadius='full'
            />
            <Text>Register with Google</Text>
          </Button>
        </>  
          }

      {fullname &&
        <Heading>Welcome, {fullname}!</Heading>}
      </section>
    </>
  )
}
