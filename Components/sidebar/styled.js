import styled, { css } from "styled-components";

const Container = styled.div`
  margin: 10px;
  height: calc(100vh - 120px);
  background: #202020;
  border-radius: 10px;
  flex: 1;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const MenuLink = styled.li`
  padding: 15px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  color: #b0b0b0;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 10px;
  cursor: pointer;
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
          background: #2e2e2e;
          color: #fff;
          svg {
            color: #00fff5;
          }
        `
      : css`
          background: transparent;
        `}
`;

export { Container, Menu, MenuLink }; 
