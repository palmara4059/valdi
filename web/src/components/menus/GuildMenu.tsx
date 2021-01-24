import React from "react";
import {
  Flex,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FiChevronDown, FiX } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { HiLogout } from "react-icons/hi";
import { StyledMenuList } from "./StyledMenuList";
import { StyledMenuItem, StyledRedMenuItem } from "./StyledMenuItem";

interface GuildMenuProps {
  channelOpen: () => void;
  inviteOpen: () => void;
}

export const GuildMenu: React.FC<GuildMenuProps> = ({
  channelOpen,
  inviteOpen,
}) => {
  return (
    <Menu placement="bottom-end">
      {({ isOpen }) => (
        <>
          <Flex justify="space-between" align="center" boxShadow="md" p="10px">
            <Heading fontSize="20px">Harmony</Heading>
            <MenuButton>
              <Icon as={!isOpen ? FiChevronDown : FiX} />
            </MenuButton>
          </Flex>
          <StyledMenuList>
            <StyledMenuItem
              label={"Create Channel"}
              icon={MdAddCircle}
              handleClick={channelOpen}
            />
            <StyledMenuItem
              label={"Invite People"}
              icon={FaUserPlus}
              handleClick={inviteOpen}
            />
            <StyledRedMenuItem
              label={"Leave Server"}
              icon={HiLogout}
              handleClick={() => console.log("Leave")}
            />
          </StyledMenuList>
        </>
      )}
    </Menu>
  );
};