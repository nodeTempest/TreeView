import React from "react";
import { StyledApp } from "./App.styled";
import { TreeViewDataType, TreeView } from "../TreeView/TreeView.component";

import data from "./data.json";

const loadTreeData = async () => {
  try {
    const json = await fetch("./data.json");
    const result: TreeViewDataType = await json.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const App = () => {
  return (
    <StyledApp>
      <TreeView data={data as any as TreeViewDataType} onToggle={(...args) => console.log(args)} />
    </StyledApp>
  );
};
