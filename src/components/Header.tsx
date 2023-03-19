import { Heading } from "@chakra-ui/react"
import { EmailIcon } from "@chakra-ui/icons"
const Header = () => {
  return (
    <Heading className=" flex items-center justify-center p-4 gap-2">
        <EmailIcon />
        Pass The Message
    </Heading>
  )
}

export default Header