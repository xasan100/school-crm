import styled, { css } from "styled-components";

const Container = styled.div`
  padding: 20px 50px 0px 50px;
  background: #202020;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 80px;
`;

const LogoImg = styled.div`
  width: 100%;
  height: 100%;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

const MenuItems = styled.li`
  position: relative;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #b0b0b0;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  z-index: 2;
  svg {
    font-size: 20px;
  }
  &:hover {
    color: #fff;
    transition: 0.3s;
    svg {
      color: #00fff5;
    }
  }
  ${(props) =>
    props.active
      ? css`
          color: #fff;
          svg {
            color: #00fff5;
          }
          &::before {
            content: "";
            position: absolute;
            top: -2px;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            background: #000;
            border-bottom: none;
            border-radius: 0.5em 0.5em 0 0;
            box-shadow: 0 1px 0 1px #00fff5 inset;
            transform: scale(1.1, 1.3) perspective(0.5em) rotateX(3deg);
            transform-origin: bottom;
          }
        `
      : css`
          background: transparent;
        `}
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

const IconsItem = styled.div`
  padding: 15px;
  border-radius: 50%;
  background: #2f2f2f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    font-size: 25px;
  }
  &:hover {
    background: #000;
    transition: 0.3s;
  }
`;

export {  LogoImg, Menu, MenuItems, Icons, IconsItem };
export default Container