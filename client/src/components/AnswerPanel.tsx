import React from 'react'
import {
    TabPanel,
    Text,
    Textarea,
    Button,
    FormHelperText
} from '@chakra-ui/react'
import { Answers, AnswerStructure } from '@/pages/[user]/questions/[id]/index.jsx'
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
        value={answers[type]['content']}
        isDisabled={answers[type]['is5thRaised']}
        >
        </Textarea>

        {!answers[type]['is5thRaised'] ? <Button onClick={() => {
            setAnswers({
                ...answers,
                [type] : {
                    ...answers[type],
                    content: '',
                    is5thRaised: !answers[type]['is5thRaised']
                }
            })
        }} colorScheme='messenger'> 🚩 Take 5<sup>th</sup>
        
        </Button> :

        (
        <>

            <Button onClick={() => {
                setAnswers({
                    ...answers,
                    [type] : {
                        ...answers[type],
                        is5thRaised: !answers[type]['is5thRaised']
                    }
                })
            }} colorScheme='red'> Lower 5<sup>th</sup>
            
            </Button>

            <FormHelperText>
                You took your 5th! If you want to give an answer, lower it down before answering.
            </FormHelperText>
        </>
        )
        }
    </TabPanel>
  )
}

export default AnswerPanel