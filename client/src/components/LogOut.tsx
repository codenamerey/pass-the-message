import { Button } from '@chakra-ui/react'
import axios from 'axios'

const LogOut = () => {

    const logOutHandler = () => {
        try {
            axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/signout`)
            window.location.href = '/';
        } catch(err) {
            console.error(err)
        }
    }

  return (
    <>
        <Button colorScheme='facebook' onClick={logOutHandler}>Log Out</Button>
    </>
  )
}

export default LogOut