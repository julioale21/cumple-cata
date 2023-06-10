import React from 'react';

import { NavBarContainer } from './NavBarContainer';
import Logo from './Logo';
import { MenuToggle } from './MenuToggle';

const Header = (props) => {

const [isOpen, setIsOpen] = React.useState(false)

const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["red", "red", "red", "red"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      {/* <MenuLinks isOpen={isOpen} /> */}
    </NavBarContainer>
  )
}

export default Header