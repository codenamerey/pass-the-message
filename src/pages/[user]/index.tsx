import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Heading,
  Button,
  Checkbox,
  CheckboxGroup,
  Stack,
  Text
} from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [wantedAnswers, setWantedAnswers] = useState<string[]>([]);

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  }

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  const handleCheckBoxChange = (e: ChangeEvent<HTMLInputElement>) => {

    // If value is in wanted answers, remove it. Else, add value to array
    wantedAnswers.includes(e.target.value) ? setWantedAnswers(wantedAnswers => wantedAnswers.filter((answer) => answer !== e.target.value)) :
                                             setWantedAnswers(wantedAnswers => [...wantedAnswers, e.target.value])
    console.log(wantedAnswers);

  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit} ref={form}>
        <FormControl colorScheme='blackAlpha.700' p='4' className=' flex grow flex-col items-center w-full justify-center gap-y-4' color='white'>
          <FormLabel>
            <Heading color='whiteAlpha.600'>Pass The Message</Heading>
            <Text>to {user}</Text>
          </FormLabel>

          <Textarea value={message} bg='whiteAlpha.300' color='white' maxW='400px' h='300px' placeholder='Say hi!' className=' placeholder-gray-300' resize='none' isRequired onChange={handleTextAreaChange}>

          </Textarea>

          <FormErrorMessage color='whiteAlpha.200'>
            Something went wrong.
          </FormErrorMessage>


          <CheckboxGroup>
            <Stack id='pref-answers' spacing={[3, 5]} direction={['row', 'column']}>
              <Checkbox value='quirky' onChange={handleCheckBoxChange}>Quirky Answer</Checkbox>
              <Checkbox value='serious' onChange={handleCheckBoxChange}>Serious Answer</Checkbox>
            </Stack>
            <FormHelperText color='white'>Pick what answer/s you expect from user</FormHelperText>
          </CheckboxGroup>

          <Button type='submit' colorScheme='messenger' isLoading={isLoading}>Pass!</Button>
        </FormControl>
      </form>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const user = context.params?.user

    return {
        props: {
            user
        }
    }
}
