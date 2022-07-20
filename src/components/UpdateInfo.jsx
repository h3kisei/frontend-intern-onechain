import { EditIcon } from "@chakra-ui/icons";
import {
    Button, Flex, IconButton, Input, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput,
    NumberInputField, NumberInputStepper, Select, useDisclosure
} from "@chakra-ui/react";
import React, { useState } from "react";
import { updateData } from "../firebase";
  
function UpdateInfo({ student }) {
        const { name: propName, sex: propSex, age: propAge, level: propLevel, id } = student;
        const { isOpen, onOpen, onClose } = useDisclosure();
        const [name, setName] = useState(propName);
        const [sex, setSex] = useState(propSex);
        const [age, setAge] = useState(propAge);
        const [level, setLevel] = useState(propLevel);
    
        const handleUpdateInfo = () => {
            updateData(name, sex, age, level, id).then(() => {
              onClose();
            });
          }
      return (
        <>
        <IconButton
          onClick={onOpen}
          mr='20px'
          variant='outline'
          colorScheme='teal'
          aria-label='edit'
          icon={<EditIcon />}
        />
          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Info</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div>
                    <Input placeholder='Fullname' mt='40px' type="text" onChange={(e) => setName(e.target.value)} />
                    <Flex flex-direction='row' mt='20px'>
                    <Select placeholder='Sex' mr='20px' onChange={(e) => setSex(e.target.value)}>
                        <option value='Male'>Nam</option>
                        <option value='Female'>Nữ</option>
                        </Select>
                        <NumberInput placeholder='Age' maxW={20} defaultValue={15} min={10} onChange={(valueAsString, valueAsNumber) => setAge(valueAsNumber)} >
                            <NumberInputField />
                            <NumberInputStepper >
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        </Flex>
                    <Input placeholder='Level' mt='20px' type="text" onChange={(e) => setLevel(e.target.value)} />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={handleUpdateInfo}>
                  Update
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
    }
  
  export default UpdateInfo;