import Form from '@/components/Form'
import { getFormValues } from '@/utils/formHelpers';
import { Button, FormLabel, Input } from '@chakra-ui/react'
import axios from 'axios';
import React, { FormEvent, useRef } from 'react'

const login = () => {

    const formRef = useRef<HTMLFormElement>(null);

    const logInHandler = (e:FormEvent) => {
        e.preventDefault();
        const formValues = getFormValues(formRef.current!);
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/local`, formValues, {
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': 'true'
            }
        })
    }

  return (
    <>
        <form onSubmit={logInHandler} ref={formRef}>
            <Form onSubmit={logInHandler}>
                <FormLabel htmlFor='username'>
                    Username:
                </FormLabel>
                <Input type="text" id="username" name="username"/>
                <FormLabel htmlFor='password'>
                    Password
                </FormLabel>
                <Input type="password" id="password" name="password"/>
                <Button type="submit" colorScheme="whatsapp">
                    Log In
                </Button>
            </Form>
        </form>
    </>
  )
}

export default login