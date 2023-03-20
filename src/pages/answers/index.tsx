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


type Data = {
    question: string,
    wanted_answers: string[],
    slug: string
}

export interface Answers {
    quirky: string,
    serious: string,
    combined: string
}

const Answer = ({data}:InferGetServerSidePropsType<typeof getServerSideProps>) => {

  return (
    <>
        <div className='w-full flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-y-0 md:gap-x-4'>
            {
                data.map((dataObj:Data) => {
                    return (<Box className=' bg-fuchsia-800 shadow-inner shadow-fuchsia-900 text-white w-80 aspect-square flex rounded-lg justify-center items-center' key={dataObj.slug}>
                        <Text>
                            {dataObj.question}
                        </Text>
                    </Box>)
                })
            
            }
        </div>
    
    </>
  )
}

export const getServerSideProps : GetServerSideProps = async() => {

    const res = await fetch('http://localhost:3000/api/hello');
    const data:Answers[] = await res.json()
    console.log(data);
    return {
        props: {
            data
        }
    }
}

export default Answer