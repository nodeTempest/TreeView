import React from "react";
import { StyledTreeViewRoot } from "./TreeView.styled";

export type TreeViewDataType = { title: string; nodes: TreeViewDataType }[];

interface ITreeViewProps {
  data: TreeViewDataType;
  level?: number;
}

export const TreeView: React.FC<ITreeViewProps> = ({ data, level = 0 }) => {
  return (
    <StyledTreeViewRoot>
      {data.map(({ title, nodes }) => (
        <>
          <div>
            <span>{level}</span> {title}
          </div>
          <>{!!nodes.length && <TreeView data={nodes} level={level + 1} />}</>
        </>
      ))}
    </StyledTreeViewRoot>
  );
};
