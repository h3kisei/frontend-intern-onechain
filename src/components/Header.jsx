import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Signout from "../components/Logout.jsx";
import "./header.css";

function Header() {
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="header">
      <IconButton
        ml="15px"
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        colorScheme="teal"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <div className="top">
            <DrawerHeader bg="#b5f5ec">O N E C H A I N</DrawerHeader>
            <Divider />
            <Flex
              mt="15px"
              mb="10px"
              justifyContent="center"
              alignItems="center"
            >
              Huy Hoang
            </Flex>
          </div>
          <DrawerBody bg="white">
            <Link to="/">
              <Button width="100%" variant="ghost" mb="5px" mt="15px">
                Home Page
              </Button>
            </Link>
            <Link to="/list">
              <Button width="100%" variant="ghost" mb="5px">
                Student List
              </Button>
            </Link>
            <Link to="/">
              <Button width="100%" variant="ghost" mb="5px">
                Notification
              </Button>
            </Link>
            <Link to="/">
              <Button width="100%" variant="ghost" mb="5px">
                Education Program
              </Button>
            </Link>
          </DrawerBody>
          <DrawerFooter bg="white">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Spacer />
      <div className="logo">O N E C H A I N</div>
      <Spacer />
      <Signout />
    </div>
  );
}

export default Header;
