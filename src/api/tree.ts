import { TreeViewDataType } from "../TreeView/TreeView.types";

export const loadTreeData = async () => {
  try {
    const json = await fetch("./data.json");
    const result: TreeViewDataType = await json.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
