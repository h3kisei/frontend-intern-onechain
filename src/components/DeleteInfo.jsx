import {
  IconButton,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogHeader,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { removeDataFromFirebase } from "../firebase";
import { DeleteIcon } from "@chakra-ui/icons";

function DeleteInfo({ student }) {
  const { id } = student;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleDeleteStudent = () => {
    removeDataFromFirebase(id).then(() => {
      onClose();
    });
  };

  return (
    <>
      <IconButton
        mr="20px"
        variant="outline"
        colorScheme="teal"
        aria-label="delete"
        icon={<DeleteIcon />}
        onClick={onOpen}
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Student
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDeleteStudent} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default DeleteInfo;
