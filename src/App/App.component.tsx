import { StyledApp } from "./App.styled";
import { TreeViewDataType, TreeView } from "../TreeView/TreeView.component";

import data from "./data.json";

export const App = () => {
  return (
    <StyledApp>
      <TreeView data={data as any as TreeViewDataType} onToggle={(...args) => console.log(args)} />
    </StyledApp>
  );
};
