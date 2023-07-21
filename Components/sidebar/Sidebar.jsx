import React from "react";
import { Container, Menu, MenuLink } from "./styled";
import { useContext } from "react";
import SiteContext from "../../context/Context";
import { useState } from "react";
import { useRouter } from "next/router";

export const Sidebar = () => {
  const { links } = useContext(SiteContext);
  const [activeLink, setActiveLink] = useState(1);
  const router = useRouter();
  const handleClick = (e) => {
    setActiveLink(e.id);
    router.push(e.link);
  };
  return (
    <Container>
      <Menu>
        {links &&
          links.map((e) => (
            <MenuLink
              key={e.id}
              active={activeLink === e.id}
              onClick={() => handleClick(e)}
            >
              {e.icon} {e.title}
            </MenuLink>
          ))}
      </Menu>
    </Container>
  );
}
export default Sidebar