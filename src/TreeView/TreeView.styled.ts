import styled, { css } from "styled-components";

interface IStyledTreeViewContainerProps {
  $level: number;
}

export const StyledTreeViewContainer = styled.div<IStyledTreeViewContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${(props) =>
    props.$level &&
    css`
      padding-left: 20px;
    `}
`;

interface StyledTreeViewItemProps {
  $isExpanded: boolean;
  $hasNodes: boolean;
}

export const StyledTreeViewItem = styled.div<StyledTreeViewItemProps>`
  cursor: pointer;
  display: flex;
  align-items: center;

  ${(props) =>
    !props.$hasNodes &&
    css`
      padding-left: 16px;
    `}

  svg {
    width: 16px;
    height: 16px;
    transition: all 200ms;

    ${(props) =>
      props.$isExpanded &&
      css`
        transform: rotate(180deg);
      `}
  }
`;
