import React from "react";
import styled from "styled-components";

interface ContextMenuItemProps {
  linkTo?: string;
  onClick?: () => void;
}

const Wrapper = styled.div`
  ${({ theme: { sizeType, colors } }) => `
  text-align: start;
  padding:  ${sizeType.xSmall}px;
  background: ${colors.someLightBlue};
  transition: 0.3s;
  margin-bottom: 1px;
  font-size: ${sizeType.smallNormal}px;
  min-width: 128px;
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:first-child {
    border-top-left-radius: ${sizeType.xxSmall}px;
    border-top-right-radius: ${sizeType.xxSmall}px;
  }
  
  &:last-child {
    margin-bottom: 0;
    border-bottom-left-radius: ${sizeType.xxSmall}px;
    border-bottom-right-radius: ${sizeType.xxSmall}px;
  }

  :hover {
    cursor: pointer;
    background: ${colors.someBlue};
    transition: 0.3s;
  }
  `}
`;

type ContextMenuType = React.PropsWithChildren<ContextMenuItemProps>;

const ContextMenuItem = ({ children, onClick }: ContextMenuType) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default ContextMenuItem;
