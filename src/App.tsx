import { TreeViewDataType, TreeView } from "./TreeView/TreeView.component";

import data from "./data.json";

import "./App.css";

export const App = () => {
  return <TreeView data={data as any as TreeViewDataType} />;
};

export default App;
