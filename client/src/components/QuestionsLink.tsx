import UserContext from "@/context/UserContext";
import { Button } from "@chakra-ui/react"
import Link from "next/link"
import { useContext } from "react";

const QuestionsLink = () => {

    const { username } = useContext(UserContext);

  return (
    <Button colorScheme="messenger">
        <Link href={`/${username}/questions`}>View questions for you</Link>
    </Button>
  )
}

export default QuestionsLink