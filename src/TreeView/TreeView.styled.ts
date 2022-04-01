import styled, { css } from "styled-components";

interface IStyledTreeViewContainerProps {
  $level: number;
}

export const StyledTreeViewContainer = styled.div<IStyledTreeViewContainerProps>`
  ${(props) =>
    props.$level &&
    css`
      padding-left: 20px;
    `}
`;

export const StyledTreeViewItem = styled.div``;
