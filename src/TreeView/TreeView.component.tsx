import React from "react";
import { StyledTreeViewRoot } from "./TreeView.styled";

export type TreeViewDataType = { title: string; nodes: TreeViewDataType[] }[];

interface ITreeViewProps {
  data: TreeViewDataType;
}

export const TreeView: React.FC<ITreeViewProps> = (props) => {
  return <StyledTreeViewRoot>hello</StyledTreeViewRoot>;
};
