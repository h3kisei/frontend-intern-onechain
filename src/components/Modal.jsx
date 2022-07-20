import {
  Button, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, IconButton, useDisclosure
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import React from "react";

function ModalInfo({ name }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
      <IconButton
        onClick={onOpen}
        mr='20px'
        variant='outline'
        colorScheme='teal'
        aria-label='Info'
        icon={<InfoIcon />}
      />
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Student Info</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='1rem'>
                {name}
              </Text>
             
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default ModalInfo;