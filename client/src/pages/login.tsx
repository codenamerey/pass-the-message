import Form from '@/components/Form'
import { Button, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const login = () => {
    const logInHandler = () => {
        
    }

  return (
    <>
        <Form onSubmit={logInHandler}>
            <FormLabel>
                Username/Email Address:
            </FormLabel>
            <Input type="email" />

            <FormLabel>
                Password
            </FormLabel>
            <Input type="password" />

            <Button colorScheme="whatsapp">
                Log In
            </Button>
        </Form>
    </>
  )
}

export default login