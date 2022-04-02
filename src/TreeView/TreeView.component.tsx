import React from "react";
import clsx from "clsx";

import { StyledTreeViewContainer, StyledTreeViewItem } from "./TreeView.styled";
import { ChevronDown } from "../icons/svg/ChevronDown";

export type TreeViewDataType = { title: string; nodes: TreeViewDataType }[];

interface ITreeViewRecursiveProps {
  data: TreeViewDataType;
  level?: number;
  onToggle?: (node: TreeViewDataType[0], options: { isExpanded: boolean; level: number }) => void;
}

export const TreeViewRecursive: React.FC<ITreeViewRecursiveProps> = ({
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
              key={index}
              className={clsx("tree-view-item", { expanded: isExpanded, "nodes-empty": !hasNodes })}
              onClick={(_) => {
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
