import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react'
import {
  Heading
} from '@chakra-ui/react';
import {
  Question
} from '@/interfaces/types';
import QuestionAndAnswer from '@/components/QuestionAndAnswer';
const index = ({ question_and_ans }:InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    question,
    answer
  } = question_and_ans

  return (
    <>
      <section className=' grow flex flex-col justify-center items-center space-y-4'>
        <Heading color='whiteAlpha.700'>{question}</Heading>
        {
          Object.keys(answer).slice(0, 3).map((answer_type) => {
            return <QuestionAndAnswer answer_type={answer_type} answer={answer[answer_type].content} is5thRaised={answer[answer_type].is5thRaised}/>
          })
        }
      </section>
    </>
  )
}

export const getServerSideProps : GetServerSideProps = async(context) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${context.params?.user}/questions/${context.params?.id}`);
  const question_and_ans: Question = await res.json()
  return {
    props: {
      question_and_ans
    }
  }
}

export default index