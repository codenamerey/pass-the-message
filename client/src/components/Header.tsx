import { Divider, Heading } from "@chakra-ui/react"
import { EmailIcon } from "@chakra-ui/icons"
import Link from "next/link.js"
const Header = () => {
  return (
    <>
    
      <Heading className=" flex items-center justify-center p-4 gap-2">
          <Link href='/' className=" flex items-center justify-center gap-2">
            <EmailIcon />
            Pass The Message
          </Link>
      </Heading>

      <Divider />
    </>

  )
}

export default Header