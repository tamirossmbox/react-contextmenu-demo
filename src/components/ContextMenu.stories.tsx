import React from "react";
import styled from "styled-components";
import ContextMenu from "./ContextMenu";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Components/ContextMenu",
  component: ContextMenu,
  decorators: [withKnobs]
};

const data = [
  { text: "1 Text to display here" },
  { text: "2 Text to display here" },
  { text: "3 Text to display here" },
  { text: "3 Text to display here but its very long text here" }
];

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

const SomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  justify-items: center;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizeType.large}px;
  padding: ${({ theme }) => theme.sizes.medium};
  color: ${({ theme }) => theme.pallete.white};
  border: 1px solid #333;
  border-radius: ${({ theme }) => theme.sizeType.xSmall}px;
`;

export const ContextMenuElement = () => {
  return (
    <Wrapper>
      <h1>ContextMenu</h1>
      <SomeContainer>
        <ContextMenu data={data} />
      </SomeContainer>
    </Wrapper>
  );
};
