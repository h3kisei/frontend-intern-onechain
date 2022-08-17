import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  IconButton,
  useDisclosure,
  UnorderedList,
  ListItem,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import React from "react";

function ModalInfo({
  name,
  studentID,
  sex,
  age,
  birth,
  hometown,
  level,
  describe,
  avatar,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        onClick={onOpen}
        mr="20px"
        variant="outline"
        colorScheme="teal"
        aria-label="Info"
        icon={<InfoIcon />}
      />
      <div className="modal">
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Student Info</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex>
                <Flex flexDirection="column">
                  <Text fontWeight="bold" mb="1rem">
                    Fullname: {name}
                  </Text>
                  <UnorderedList>
                    <ListItem>Sex: {sex}</ListItem>
                    <ListItem>Student ID: {studentID}</ListItem>
                    <ListItem>Age: {age}</ListItem>
                    <ListItem>Birth: {birth}</ListItem>
                    <ListItem>Home Town: {hometown}</ListItem>
                    <ListItem>Level: {level}</ListItem>
                    <ListItem>Describe: {describe}</ListItem>
                  </UnorderedList>
                </Flex>
                <Spacer />
                <img src={avatar} />
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}

export default ModalInfo;
