import data from "./data.json";
import { TreeViewDataType, TreeView } from "./TreeView/TreeView.component";

export const App = () => {
  return <TreeView data={data as any as TreeViewDataType} />;
};

export default App;
