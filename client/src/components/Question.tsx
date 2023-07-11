import {
    Box,
    Text
} from '@chakra-ui/react';
import Link from 'next/link';

import {
  Data
} from '@/interfaces/types'
import { ReactNode } from 'react';

const Question = ({ children, dataObj, user }: {children?: ReactNode ,dataObj: Data, user: string}) => {

  return (
      <Link href={`../${user}/questions/${dataObj._id}`}>
        <Box className=' bg-fuchsia-800 shadow-inner shadow-fuchsia-900 text-white w-80 aspect-square flex rounded-lg justify-center items-center'>
            <Text>
                {user}
                {dataObj.content}

                {
                  children
                }
                
            </Text>
        </Box>
      </Link>
  )
}

export default Question