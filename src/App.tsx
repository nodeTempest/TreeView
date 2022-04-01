import { StyledApp } from "./App.styled";
import { TreeViewDataType, TreeView } from "./TreeView/TreeView.component";

import data from "./data.json";

import "./App.css";

export const App = () => {
  return (
    <StyledApp>
      <TreeView data={data as any as TreeViewDataType} />
    </StyledApp>
  );
};

export default App;
