import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import { Avatar, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react';
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
        Home Page
        </MenuItem>
        <MenuItem icon={<ExternalLinkIcon />}>
        Student List
        </MenuItem>
        <MenuItem icon={<RepeatIcon />}>
        Notification
        </MenuItem>
        <MenuItem icon={<EditIcon />}>
        Education Program
        </MenuItem>
    </MenuList>
    </Menu>
    <Spacer />
    <Menu>
    <MenuButton
        aria-label='Options'
        variant='outline'>
    <Avatar size='sm' bg='teal.500' float='right' />

    </MenuButton>
    <MenuList>
        <MenuItem icon={<AddIcon />}>
        Show Profile
        </MenuItem>
        <MenuItem icon={<EditIcon />}>
        Edit Profile
        </MenuItem>
        <MenuItem icon={<RepeatIcon />}>
        Logout
        </MenuItem>
    </MenuList>
    </Menu>
    </div>
    )
}

export default Header;