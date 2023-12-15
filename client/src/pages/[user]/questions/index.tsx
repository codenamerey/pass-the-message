import {  
    Box,
    Button,
    Text
} from '@chakra-ui/react';
import type {
    GetServerSideProps,
    InferGetServerSidePropsType
} from 'next';
import {
    useCallback,
    useContext,
    useEffect,
    useState
} from 'react';
import Question from '@/components/Question';
import {
    Answers,
    Data
} from '@/interfaces/types'
import axios from 'axios';
import UserContext from '@/context/UserContext';
import tryUserFetch from '@/utils/tryUserFetch';


const Answer = ({data, user}:InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const { username, setUser } = useContext(UserContext);
    const [questions, setQuestions] = useState<Data[]>([]);

    const fetchUserUnansweredQuestions = useCallback(async () => {

        if (!username) {
            const user = await tryUserFetch();
            if (!user) return;
            setUser(user);
        }

        // Check if username is same with the user from the server side props
        console.log(username, user);
        if (username !== user) return;

        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/questions`, {withCredentials: true});
            const questions:Data[] = res.data;
            console.log(res);
            setQuestions(questions);
        } catch(err) {

        }
    }, [user])

    // fetch user unanswered questions once on mount
    useEffect(() => {
        fetchUserUnansweredQuestions();
    }, [])

  return (
    <>
        <div className='w-full flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-y-0 md:gap-x-4'>
            {

            // If there are no questions, then display the answered questions of user
            // This means that the user is not the one who is logged in
            // Or the user is the one who is logged in but has no unanswered questions
                questions.length === 0 &&
                data.map((dataObj:Data) => {
                    return (
                        <Question user={user} key={dataObj._id} dataObj={dataObj} />
                        )
                    })
            }

            {
                // If there are questions, iterate through them
                questions.length !== 0 &&
                questions.map((dataObj:Data) => {
                    return (
                        <Question user={user} key={dataObj._id} dataObj={dataObj}>
                            <Button colorScheme="messenger">Answer This Question</Button>
                        </Question>
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