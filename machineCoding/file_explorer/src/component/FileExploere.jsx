import { useState } from "react";

export default function FileExplorer({ data }) {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <>
      {data.map((folder, index) => {
        return (
          <div key={index} className="container">
            <p>
              <span
                style={{
                  marginInline: ".5rem",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setShowChildren((prev) => {
                    return !prev;
                  });
                }}
              >
                {folder.type === "folder" && showChildren ? "-" : "+"}
              </span>
              {folder?.name}
            </p>
            {showChildren && folder.children && (
              <FileExplorer data={folder.children} />
            )}
          </div>
        );
      })}
    </>
  );
}
