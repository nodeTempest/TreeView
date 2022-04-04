import React from "react";
import { StyledApp } from "./App.styled";
import { TreeView } from "../TreeView/TreeView.component";
import { TreeViewDataType } from "../TreeView/TreeView.types";

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
  const [data, setData] = React.useState<TreeViewDataType | null>(null);

  React.useEffect(() => {
    loadTreeData().then((data) => setData(data));
  }, []);

  return <StyledApp>{data && <TreeView data={data!} />}</StyledApp>;
};
