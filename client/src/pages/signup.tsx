import Form from '@/components/Form'
import { Button, FormLabel, Input } from '@chakra-ui/react'

const signup = () => {
  return (
    <>
        <Form>

            <FormLabel>
                First Name
            </FormLabel>
            <Input type="text" name="first_name"/>

            <FormLabel>
                Last Name
            </FormLabel>
            <Input type="text" name="last_name"/>

            <FormLabel>
                Username
            </FormLabel>
            <Input type="text" name="username"/>

            <FormLabel>
                Email
            </FormLabel>
            <Input type="email" name="email"/>

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