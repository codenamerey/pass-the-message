import { Card, 
    CardHeader, 
    CardBody,
    Heading } from "@chakra-ui/react"

const CardContent = ({ answer_type, answer }:  {answer_type: string, answer: string}) => {
    return (
        <>
            <CardHeader as='div'>
                <Heading size='md' as='h1'>{answer_type}</Heading>
            </CardHeader>

            <CardBody>
                <p>{answer}</p>
            </CardBody>
        </>
    )
}

const QuestionAndAnswer = ({ answer_type, answer, is5thRaised }: {answer_type: string, answer: string, is5thRaised: boolean}) => {

    if(!answer && !is5thRaised) return null

    if(is5thRaised) {
        return (
            <Card w='md' bg='red.400' className="relative before:absolute before:bg-white before:bg-opacity-50 before:italic before:backdrop-blur-sm before:rounded-sm before:text-red-800 before:inset-0 before:content-['Fifth_is_taken!_This_means_user_declined_to_answer'] before:flex before:justify-center before:items-center">
                <CardContent answer_type={answer_type} answer='' />
            </Card>
        )
    } else {
        return (
            <Card w='md'>
                <CardContent answer_type={answer_type} answer={answer}/>  
            </Card>
           )
    }


 }
 
 export default QuestionAndAnswer