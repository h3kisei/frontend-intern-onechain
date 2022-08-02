import { AddIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import {
    Avatar, Button, Divider, Drawer,
    DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer, useDisclosure
} from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import { auth, logout, getDataFromFirebase } from "../firebase";
import './header.css';


function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  // const [userDetails, setUserDetails] = useState([]);

  // useEffect(() => {
  //   getDataFromFirebase('userDetails').then(results => {
  //       setUserDetails(results);
  //   })
  // }, []);

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
        <MenuItem icon={<RepeatIcon />} onClick = { out } >
        Logout
        </MenuItem>
    </MenuList>
    </Menu>
    </div>
    )
}

export default Header;