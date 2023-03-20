import {
    Box,
    Text
} from '@chakra-ui/react';
import { Data } from '@/pages/questions/index';
const Question = ({ dataObj }: {dataObj: Data}) => {

  return (
    <Box className=' bg-fuchsia-800 shadow-inner shadow-fuchsia-900 text-white w-80 aspect-square flex rounded-lg justify-center items-center' key={dataObj.slug}>
        <Text>
            {dataObj.question}
        </Text>
    </Box>
  )
}

export default Question