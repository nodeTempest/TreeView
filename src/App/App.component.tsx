import React from "react";

import { StyledApp } from "./App.styled";
import { TreeView } from "../TreeView/TreeView.component";
import { TreeViewDataType } from "../TreeView/TreeView.types";
import { loadTreeData } from "../api/tree";

export const App = () => {
  const [data, setData] = React.useState<TreeViewDataType | null>(null);

  React.useEffect(() => {
    loadTreeData().then((data) => setData(data));
  }, []);

  return <StyledApp>{data && <TreeView data={data!} />}</StyledApp>;
};
