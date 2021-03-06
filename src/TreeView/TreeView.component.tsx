import React from "react";
import clsx from "clsx";

import { StyledTreeViewContainer, StyledTreeViewItem } from "./TreeView.styled";
import { ChevronDown } from "../icons/svg/ChevronDown";
import { TreeViewDataType } from "./TreeView.types";

interface ITreeViewRecursiveProps {
  data: TreeViewDataType;
  level?: number;
  onToggle?: (node: TreeViewDataType[0], options: { isExpanded: boolean; level: number }) => void;
}

const TreeViewRecursive: React.FC<ITreeViewRecursiveProps> = ({
  data,
  level = 0,
  onToggle = () => {},
}) => {
  const [expandedIndices, setExpandedIndices] = React.useState<number[]>([]);

  return (
    <StyledTreeViewContainer className={clsx("tree-view-container", { nested: level !== 0 })}>
      {data.map(({ title, nodes }, index) => {
        const isExpanded = expandedIndices.includes(index);
        const hasNodes = !!nodes.length;
        return (
          <React.Fragment key={index}>
            <StyledTreeViewItem
              className={clsx("tree-view-item", { expanded: isExpanded, "nodes-empty": !hasNodes })}
              onClick={() => {
                if (isExpanded) {
                  setExpandedIndices(expandedIndices.filter((itemIndex) => itemIndex !== index));
                } else {
                  setExpandedIndices([...expandedIndices, index]);
                }
                onToggle({ title, nodes }, { isExpanded: !isExpanded, level });
              }}
            >
              {hasNodes && <ChevronDown />}
              {title}
            </StyledTreeViewItem>
            <>
              {hasNodes && isExpanded && (
                <TreeViewRecursive data={nodes} level={level + 1} onToggle={onToggle} />
              )}
            </>
          </React.Fragment>
        );
      })}
    </StyledTreeViewContainer>
  );
};

export const TreeView: React.FC<Omit<ITreeViewRecursiveProps, "level">> = (props) => {
  return <TreeViewRecursive {...props} />;
};
