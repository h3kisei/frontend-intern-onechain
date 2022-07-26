import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import { Avatar, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react';
import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
    <div className="header">
    <Menu>
    <MenuButton
        ml='15px'
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
    />
    <MenuList>
        <Link to='/'>
            <MenuItem icon={<AddIcon />}>
            Home Page
            </MenuItem>
        </Link>
        <Link to='/list'>
            <MenuItem icon={<ExternalLinkIcon />}>
            Student List
            </MenuItem>
        </Link>
        <Link to='/'>
            <MenuItem icon={<RepeatIcon />}>
            Notification
            </MenuItem>
        </Link>
        <Link to='/'>
            <MenuItem icon={<EditIcon />}>
            Education Program
            </MenuItem>
        </Link>
    </MenuList>
    </Menu>
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