import React from "react";
import { nanoid } from "nanoid";

import { StyledTreeViewContainer, StyledTreeViewItem } from "./TreeView.styled";

export type TreeViewDataType = { title: string; nodes: TreeViewDataType }[];

interface ITreeViewProps {
  data: TreeViewDataType;
  level?: number;
  onExpand?: (item: TreeViewDataType[0]) => void;
}

export const TreeView: React.FC<ITreeViewProps> = ({ data, level = 0, onExpand = () => {} }) => {
  const [expandedIndices, setExpandedIndices] = React.useState<number[]>([]);

  return (
    <StyledTreeViewContainer className="tree-view-container" $level={level}>
      {data.map(({ title, nodes }, index) => (
        <>
          <StyledTreeViewItem
            key={nanoid()}
            className="tree-view-item"
            onClick={(_) => {
              if (expandedIndices.includes(index)) {
                setExpandedIndices(expandedIndices.filter((itemIndex) => itemIndex !== index));
              } else {
                setExpandedIndices([...expandedIndices, index]);
              }
              onExpand({ title, nodes });
            }}
          >
            {title}
          </StyledTreeViewItem>
          <>
            {!!nodes.length && expandedIndices.includes(index) && (
              <TreeView data={nodes} level={level + 1} />
            )}
          </>
        </>
      ))}
    </StyledTreeViewContainer>
  );
};
