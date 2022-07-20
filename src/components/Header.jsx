import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import { Avatar, IconButton, Menu, MenuButton, MenuItem, MenuList, Flex } from '@chakra-ui/react';
import React from "react";
import './header.css';

function Header() {
    return (
    <div className="header">
    <Menu>
    <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
    />
    <MenuList>
        <MenuItem icon={<AddIcon />}>
        New Tab
        </MenuItem>
        <MenuItem icon={<ExternalLinkIcon />}>
        New Window
        </MenuItem>
        <MenuItem icon={<RepeatIcon />}>
        Open Closed Tab
        </MenuItem>
        <MenuItem icon={<EditIcon />}>
        Open File...
        </MenuItem>
    </MenuList>
    </Menu>
        <Avatar size='sm' bg='teal.500' float='right' m='10px' />
    </div>
    )
}

export default Header;