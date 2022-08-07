import { RepeatIcon } from '@chakra-ui/icons';
import {
    AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Avatar, Button, Menu, MenuButton, MenuItem, MenuList, useDisclosure
} from '@chakra-ui/react';
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { auth, logout } from "../firebase";
import './header.css';


function Signout() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const out = () => {
    logout().then(() => {
      navigate('/');
		})
  };
  
  useEffect(() => {
    if (loading) return;
  }, [user, loading]);
  
  return (
    <Menu>
    <MenuButton
        mr='15px'
        aria-label='Options'
        variant='outline'>
        <Avatar size='sm' bg='teal.500' float='right' />
    </MenuButton>
    <MenuList>
        <>  
        <MenuItem icon={<RepeatIcon />} onClick = { onOpen } >
        Logout
        </MenuItem>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Logout
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={ out } ml={3}>
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
    </MenuList>
    </Menu>
    )
}

export default Signout;