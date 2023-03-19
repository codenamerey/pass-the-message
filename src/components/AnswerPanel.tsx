import React from 'react'
import {
    TabPanel,
    Text,
    Textarea,
    Button
} from '@chakra-ui/react'
import { Answers } from '@/pages/answer/index'
interface Props {
    setAnswers: Function,
    answers: Answers,
    type: string
}

const AnswerPanel = ({ setAnswers, answers, type }:Props) => {
  return (
    <TabPanel className=' flex flex-col gap-y-2'>
        <Text>{`${type[0].toUpperCase()}${type.slice(1).toLowerCase()}`}</Text>
        <Textarea
        onChange={(e) => {
            setAnswers({
                ...answers,
                [type]: e.target.value
            })
            }
        }
        />
        <Button colorScheme='messenger'>🚩 Raise 5<sup>th</sup></Button>
    </TabPanel>
  )
}

export default AnswerPanel