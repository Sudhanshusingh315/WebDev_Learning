import { useState } from "react";
import "./App.css";
import data from "./data.json";
import FileExplorer from "./component/FileExploere";

function App() {
  const [folderStructure, setFolderStructuer] = useState(data);

  return (
    <>
      <h1>hello</h1>
      <FileExplorer data={folderStructure} />
    </>
  );
}

export default App;
