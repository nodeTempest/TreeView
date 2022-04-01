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

export const StyledTreeViewItem = styled.div`
  cursor: pointer;
`;
