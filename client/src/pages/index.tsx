import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import {
  Heading,
  Button,
  Icon
} from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <section className=' flex flex-col justify-center items-center grow text-center gap-y-4'>
        <Heading color='whiteAlpha.600'>Relay your message to someone.</Heading>
        <Button colorScheme='whatsapp'>Register</Button>
        <Button colorScheme='messenger'>Register with Facebook</Button>
        <Button colorScheme='linkedin'>Register with Google</Button>
      </section>
    </>
  )
}
