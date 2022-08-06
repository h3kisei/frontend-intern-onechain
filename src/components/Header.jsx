import { HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import {
  AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Avatar, Button, Divider, Drawer,
  DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter,
  DrawerHeader,
  DrawerOverlay, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer, useDisclosure
} from '@chakra-ui/react';
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import { auth, logout } from "../firebase";
import './header.css';


function Header() {
  const btnRef = React.useRef()
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
    <div className="header">
        <IconButton
            ml='15px'
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'           
            colorScheme='teal' onClick={onOpen}
        />
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
        <div className="top">
          <DrawerHeader bg='#b5f5ec'>O N E C H A I N</DrawerHeader>
          <Divider />
          <Flex mt='15px' mb='10px' justifyContent='center' alignItems='center'>
          <Avatar size='sm' bg='teal.500' float='right' mr='10px' />
          Huy Hoang
          </Flex>
        </div>
          <DrawerBody bg='white'>
            <Link to='/'>
                <Button width='100%' variant='ghost' mb='5px' mt='15px'>
                Home Page
                </Button>
            </Link>
            <Link to='/list'>
                <Button width='100%' variant='ghost' mb='5px'>
                Student List
                </Button>
            </Link>
            <Link to='/'>
                <Button width='100%' variant='ghost' mb='5px'>
                Notification
                </Button>
            </Link>
            <Link to='/'>
                <Button  width='100%' variant='ghost' mb='5px'>
                Education Program
                </Button>
            </Link>
          </DrawerBody>
          <DrawerFooter bg='white'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
   
    <Spacer />
    <div className="logo">O N E C H A I N</div>
    <Spacer />
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
    </div>
    )
}

export default Header;