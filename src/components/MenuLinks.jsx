import React from 'react';

import { Stack } from '@chakra-ui/react';
import { MenuItem } from './MenuItem';

const MenuLinks = ({ isOpen, setIsOpen }) => {
  return (
    <Stack
        width={["100%", "100%", "auto", "auto"]}
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        alignItems="center"
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
        display={isOpen ? 'flex' : ['none', 'none', 'flex', 'flex']}
        paddingRight={[0, 0, 100]}
        >
        <MenuItem onClick={() => setIsOpen(false)} to="/">Home</MenuItem>
        <MenuItem onClick={() => setIsOpen(false)} to="/messages">Messages</MenuItem>
    </Stack>
  )
}

export { MenuLinks }