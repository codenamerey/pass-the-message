
import UserContext from '@/context/UserContext';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { useContext } from 'react';

const CopyLink = () => {

    const { isOpen, onClose, onOpen } = useDisclosure();

    const { username } = useContext(UserContext);

  return (
    <>
        <Button colorScheme="whatsapp" onClick={() => {
            navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_CLIENT_URL}/${username}`);
            onOpen();
        }}>Copy your Pass The Message link!</Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
            <ModalOverlay />
            <ModalContent p={3}>
                <ModalCloseButton />

                <ModalBody>
                    <Text>Link has been copied!</Text>
                </ModalBody>
                
                <Button colorScheme="messenger" onClick={onClose}>Close</Button>
            </ModalContent>
        </Modal>
    </>
  )
}

export default CopyLink