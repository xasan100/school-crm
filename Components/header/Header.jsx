import React, { useState } from "react";
import {
  Container,
  Icons,
  IconsItem,
  LogoImg,
  Menu,
  MenuItems,
} from "./styled";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import { menuItems } from "../../constant/menu";
import { GoBellFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import SiteContext from "../../context/Context";

export  const Header =()=> {
  const [activeLink, setActiveLink] = useState(1);
  const { setLinks } = useContext(SiteContext);
  const handleClick = (e, children) => {
    setActiveLink(e);
    setLinks(children);
  };
  return (
    <Container>
      <LogoImg>
        <Image src={Logo} alt="logo img" width={120} height={60} />
      </LogoImg>
      <Menu>
        {menuItems.map((link) => (
          <MenuItems
            key={link.id}
            onClick={() => handleClick(link.id, link.children)}
            active={activeLink === link.id}
          >
            {link.icon}
            {link.title}
          </MenuItems>
        ))}
      </Menu>
      <Icons>
        <IconsItem>
          <GoBellFill color="#FFE605" />
        </IconsItem>
        <IconsItem>
          <FaUser color="#00FFF5" />
        </IconsItem>
      </Icons>
    </Container>
  );
}
export default Header