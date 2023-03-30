import {  
    Box,
    Text
} from '@chakra-ui/react';
import { IsPathDefaultUndefined } from 'mongoose/types/inferschematype.js';
import type {
    GetServerSideProps,
    InferGetServerSidePropsType
} from 'next';
import {
    ChangeEvent,
    useState
} from 'react';
import AnswerPanel from '@/components/AnswerPanel';
import Question from '@/components/Question';
import { Answers } from './[id]/answer/index.jsx';
export type Data = {
    question: string,
    wanted_answers: string[],
    slug: string
}

const Answer = ({data}:InferGetServerSidePropsType<typeof getServerSideProps>) => {

  return (
    <>
        <div className='w-full flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-y-0 md:gap-x-4'>
            {
                data.map((dataObj:Data) => {
                    return (
                        <Question key={dataObj.slug} dataObj={dataObj} />
                    )
                })
            
            }
        </div>
    
    </>
  )
}

export const getServerSideProps : GetServerSideProps = async(context) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${context.params?.user}/questions/`);
    const data:Answers[] = await res.json()
    return {
        props: {
            data
        }
    }
}

export default Answer