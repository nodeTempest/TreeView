import React from "react";

import { StyledTreeViewContainer, StyledTreeViewItem } from "./TreeView.styled";
import { ChevronDown } from "../icons/svg/ChevronDown";

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
      {data.map(({ title, nodes }, index) => {
        const isExpanded = expandedIndices.includes(index);
        const hasNodes = !!nodes.length;
        return (
          <>
            <StyledTreeViewItem
              key={index}
              className="tree-view-item"
              onClick={(_) => {
                if (isExpanded) {
                  setExpandedIndices(expandedIndices.filter((itemIndex) => itemIndex !== index));
                } else {
                  setExpandedIndices([...expandedIndices, index]);
                }
                onExpand({ title, nodes });
              }}
              $isExpanded={isExpanded}
              $hasNodes={hasNodes}
            >
              {hasNodes && <ChevronDown />}
              {title}
            </StyledTreeViewItem>
            <>{hasNodes && isExpanded && <TreeView data={nodes} level={level + 1} />}</>
          </>
        );
      })}
    </StyledTreeViewContainer>
  );
};
