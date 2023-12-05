import { Button, Input, Menu, MenuButton } from '@chakra-ui/react';
import { useEffect } from 'react';
import { getC02Intensity } from '../services/getIntensity';

export const HeaderMenu: () => React.ReactElement = () => {
  useEffect(() => {
    getC02Intensity();
  }, );

  return (
    <Menu>
      <MenuButton as={Button} colorScheme="pink">
        Home
      </MenuButton>
      {/* <MenuDivider /> */}
      {/* <Spacer /> */}
      <Input />
      {/* <MenuList>
        <MenuGroup title="Profile">
          <MenuItem>My Account</MenuItem>
          <MenuItem>Payments </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Help">
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
      </MenuList> */}
    </Menu>
  );
};
