import { 
    Button, 
    Box,
    Text,
    FormHelperText,
    FormControl,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    Tab,
    Textarea
} from '@chakra-ui/react';
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
    Answers
} from "@/interfaces/types"

const Answer = ({data, user}:InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const [answers, setAnswers] = useState<Answers>({
        quirky: {
            content: '',
            is5thRaised: false
        },
        serious: {
            content: '',
            is5thRaised: false
        },
        combined: {
            content: '',
            is5thRaised: false
        }
    })
    const isCombinedValid:Boolean | undefined = (!answers.quirky.content && !answers.serious.content) 
    const areSingularsValid:Boolean | undefined = (!answers.combined.content)

    const {
        question,
        wanted_answers
    } = data;
  return (
    <form>
        <FormControl>
            <Box className=' grow flex flex-col justify-center items-center p-4'>
                <Question dataObj={data} user={user}/>
                <FormHelperText color='white'>{user} Requested Answers: {
                    !wanted_answers.length ? 'None' :
                    wanted_answers.length > 1 ? (`${wanted_answers[0]} and ${wanted_answers[1]}`) :
                    wanted_answers[0]
                }</FormHelperText>

                <Tabs p='4' bg='gray.800' colorScheme='messenger' color='white' variant='enclosed' isFitted={true}>
                    <TabList>
                        <Tab isDisabled={!areSingularsValid}>Quirky Answer</Tab>
                        <Tab isDisabled={!areSingularsValid}>Serious Answer</Tab>
                        <Tab isDisabled={!isCombinedValid}>Combined Answer</Tab>
                    </TabList>

                    <TabPanels>

                        {
                            (Object.keys(answers)).map(key => {
                                return <AnswerPanel type={key} answers={answers} setAnswers={setAnswers} />
                            })
                        }

                    </TabPanels>
                </Tabs>

            </Box>
        </FormControl>
    </form>
  )
}

export const getServerSideProps : GetServerSideProps = async(context) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${context.params?.user}/questions/${context.params?.id}`);
    let data = await res.json()
    
    return {
        props: {
            data,
            user: context.params?.user
        }
    }
}

export default Answer