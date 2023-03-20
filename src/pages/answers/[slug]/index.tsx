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

    const [answers, setAnswers] = useState<Answers>({
        quirky: '',
        serious: '',
        combined: ''
    })
    const isCombinedValid:Boolean | undefined = (!answers.quirky && !answers.serious) 
    const areSingularsValid:Boolean | undefined = (!answers.combined)

    const {
        question,
        wanted_answers
    } = data;

  return (
    <form>
        <FormControl>
            <Box className=' grow flex flex-col justify-center items-center p-4'>
                <Box className='aspect-square bg-white p-6 flex justify-center items-center rounded-lg w-80 text-center'>
                    <Text>{question}</Text>
                </Box>
                <FormHelperText color='white'>Requested Answers: {
                    !wanted_answers.length ? 'None' :
                    wanted_answers.length > 1 ? (`${wanted_answers[0]} and ${wanted_answers[1]}`) :
                    wanted_answers[0]
                }</FormHelperText>

                <Tabs bg='gray.800' colorScheme='linkedin' color='white'>
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
    console.log('heyyy!')
    const res = await fetch('http://localhost:3000/api/hello');
    let data = await res.json()
    console.log(context.params?.slug);
    data = (data.filter((datum:Data) => datum.slug === `${context.params?.slug}`))[0];
    console.log(data);
    return {
        props: {
            data
        }
    }
}

export default Answer