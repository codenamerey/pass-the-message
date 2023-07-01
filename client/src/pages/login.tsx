import Form from '@/components/Form'
import { getFormValues } from '@/utils/formHelpers';
import { Button, FormLabel, Input } from '@chakra-ui/react'
import axios from 'axios';
import React, { FormEvent, useRef } from 'react'

const login = () => {

    const formRef = useRef<HTMLFormElement>(null);

    const logInHandler = (e:FormEvent) => {
        e.preventDefault();
        console.log(formRef?.current);
        const formValues = getFormValues(formRef.current!);

        try {
            axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/local`, formValues, {
                withCredentials: true
            })

            window.location.href = '/';
        } catch(err) {
            console.error(err)
        }
    }

  return (
    <>
        <Form onSubmit={logInHandler} ref={formRef}>
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
    </>
  )
}

export default login