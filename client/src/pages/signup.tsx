import Form from '@/components/Form'
import { Button, FormLabel, Input } from '@chakra-ui/react'

const signup = () => {
  return (
    <>
        <Form>
            <FormLabel>
                Username
            </FormLabel>
            <Input type="text" />

            <FormLabel>
                Password
            </FormLabel>
            <Input type="password" />

            <Button colorScheme="whatsapp">
                Sign Up
            </Button>
        </Form>
    </>
  )
}

export default signup