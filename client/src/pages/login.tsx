import Form from '@/components/Form'
import { Button, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const login = () => {
    const logInHandler = () => {

    }

  return (
    <>
        <Form onSubmit={logInHandler}>
            <FormLabel htmlFor='username'>
                Username:
            </FormLabel>
            <Input type="text" id="username" name="username"/>

            <FormLabel htmlFor='password'>
                Password
            </FormLabel>
            <Input type="password" id="password" name="password"/>

            <Button colorScheme="whatsapp">
                Log In
            </Button>
        </Form>
    </>
  )
}

export default login