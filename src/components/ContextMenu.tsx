import React from "react";
import styled from "styled-components";
import ContextMenuItem from "./ContextMenuItem";
import useContextMenu from "../hooks/useContextMenu";

interface DataProps {
  text: string;
  onClick?: () => void;
}

interface ContextMenuProps {
  data?: DataProps[];
  xPos?: string;
  yPos?: string;
}

const Wrapper = styled.span<ContextMenuProps>`
  ${({ theme: { colors, sizeType }, xPos, yPos }) => `
  color: ${colors.white};
  background: ${colors.veryLightBlue};
  position: absolute;
  top: ${yPos};
  left: ${xPos};
  border: 2px solid ${colors.veryLightBlue};
  border-radius: ${sizeType.xxSmall}px;
  `}
`;

type ContextMenuType = React.PropsWithChildren<ContextMenuProps>;

const ContextMenu = ({ data = [] }: ContextMenuType) => {
  const { xPos, yPos, isMenuOpen, handleClick } = useContextMenu();

  if (!isMenuOpen) return null;

  return (
    <Wrapper onClick={(e) => handleClick(e)} xPos={xPos} yPos={yPos}>
      {data.map(({ text, onClick = () => null }: DataProps) => (
        <ContextMenuItem key={text} onClick={onClick}>
          {text}
        </ContextMenuItem>
      ))}
    </Wrapper>
  );
};

export default ContextMenu;
