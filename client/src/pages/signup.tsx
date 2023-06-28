import Form from '@/components/Form'
import { Button, FormLabel, Input } from '@chakra-ui/react'
import axios from 'axios'
import { FormEvent, FormEventHandler, useRef } from 'react'
import { getFormValues } from '@/utils/formHelpers'

export interface UserDetails {
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    password: string,

}

const signup = () => {

    const formRef = useRef<HTMLFormElement>(null);

    const signUpSubmit:FormEventHandler = async(e:FormEvent) => {
        console.log('Submitted');
        e.preventDefault();
        try {

            const formValues = getFormValues(formRef.current!);
            await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`, formValues);
        } catch(err) {
            console.error("Failed to create user");
            alert(err);
        }
    }

  return (
    <>
        <form onSubmit={signUpSubmit} ref={formRef}>
            <Form onSubmit={signUpSubmit}>
                <FormLabel htmlFor='first_name'>
                    First Name
                </FormLabel>
                <Input id="first_name" type="text" name="first_name"/>
                <FormLabel htmlFor='last_name'>
                    Last Name
                </FormLabel>
                <Input id="last_name" type="text" name="last_name"/>
                <FormLabel htmlFor='username'>
                    Username
                </FormLabel>
                <Input id="username" type="text" name="username"/>
                <FormLabel htmlFor='email'>
                    Email
                </FormLabel>
                <Input id="email" type="email" name="email"/>
                <FormLabel htmlFor='password'>
                    Password
                </FormLabel>
                <Input name="password" id="password" type="password" />
                <Button colorScheme="whatsapp" type='submit'>
                    Sign Up
                </Button>
            </Form>
        </form>
    </>
  )
}

export default signup