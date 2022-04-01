import React from "react";
import { StyledTreeViewContainer, StyledTreeViewItem } from "./TreeView.styled";

export type TreeViewDataType = { title: string; nodes: TreeViewDataType }[];

interface ITreeViewProps {
  data: TreeViewDataType;
  level?: number;
}

export const TreeView: React.FC<ITreeViewProps> = ({ data, level = 0 }) => {
  return (
    <StyledTreeViewContainer $level={level}>
      {data.map(({ title, nodes }) => (
        <>
          <StyledTreeViewItem>{title}</StyledTreeViewItem>
          <>{!!nodes.length && <TreeView data={nodes} level={level + 1} />}</>
        </>
      ))}
    </StyledTreeViewContainer>
  );
};
