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
import {
    Answers,
    Data
} from '@/interfaces/types'


const Answer = ({data, user}:InferGetServerSidePropsType<typeof getServerSideProps>) => {

  return (
    <>
        <div className='w-full flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-y-0 md:gap-x-4'>
            {
                data.map((dataObj:Data) => {
                    return (
                        <Question user={user} key={dataObj._id} dataObj={dataObj} />
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
            data,
            user: context.params?.user
        }
    }
}

export default Answer