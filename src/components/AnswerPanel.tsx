import React from 'react'
import {
    TabPanel,
    Text,
    Textarea,
    Button
} from '@chakra-ui/react'
import { Answers, AnswerStructure } from '@/pages/questions/[slug]/index.jsx'
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
                [type]: {
                    ...answers[type],
                    content: e.target.value
                }
            })
            }
        }
        />
        {!answers[type]['is5thRaised'] ? <Button onClick={() => {
            setAnswers({
                ...answers,
                [type] : {
                    ...answers[type],
                    is5thRaised: !answers[type]['is5thRaised']
                }
            })
        }} colorScheme='messenger'> 🚩 Raise 5<sup>th</sup>
        
        </Button> :

        <Button onClick={() => {
            setAnswers({
                ...answers,
                [type] : {
                    ...answers[type],
                    is5thRaised: !answers[type]['is5thRaised']
                }
            })
        }} colorScheme='red'> 🚩 Unraise 5<sup>th</sup>
        
        </Button>
        }
    </TabPanel>
  )
}

export default AnswerPanel