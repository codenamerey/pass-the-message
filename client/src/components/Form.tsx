import React, { FormEventHandler } from 'react'
import {
    FormControl
  } from '@chakra-ui/react'
import axios from "axios";


const Form = ({ children, onSubmit }: { children:React.ReactNode, onSubmit:FormEventHandler }) => {
  return (
    <section className='grow flex flex-col justify-center items-center'>
        <div className='mx-10 w-[90%] md:m-0 md:w-1/2 lg:w-1/3'>
            <FormControl onSubmit={onSubmit} className=' md:aspect-[1/1] bg-slate-900 mix-blend-multiply py-4  md:py-2 px-10 rounded-md flex flex-col justify-center items-center gap-2 text-white'>
                {children}
            </FormControl>
        </div>
    </section>
  )
}

export default Form