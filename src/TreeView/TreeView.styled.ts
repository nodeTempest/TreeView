import styled from "styled-components";

export const StyledTreeViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &.nested {
    padding-left: 20px;
  }
`;

export const StyledTreeViewItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;

  &.nodes-empty {
    padding-left: 16px;
  }

  svg {
    width: 16px;
    height: 16px;
    transition: all 200ms;
  }

  &.expanded svg {
    transform: rotate(-180deg);
  }
`;
