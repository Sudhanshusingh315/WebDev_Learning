import "./App.css";
import { Children } from "react";

const CustomSwitch = ({ children, value }) => {
  const passedCases = [];
  const defaultCase = [];

  Children.forEach(children, (e) => {
    console.log(e)
    if (e.type.name === "CutsomCase") {
      console.log("inside cusomt case")
      if (typeof e.props.value === "function") {
        if (e.props.value(value)) {
          passedCases.push(e);
        }
      } else if (value === e.props.value) {
        passedCases.push(e);
      }
    } else if (e.type.name === "DefaultCase") {
      defaultCase.push(e);
    }
  });
  console.log("passed cases", passedCases);
  if (passedCases.length > 0) {
    return passedCases;
  } else {
    return defaultCase;
  }
};

const CutsomCase = ({ children }) => {
  return <>{children}</>;
};

const DefaultCase = ({ children }) => {
  return <>{children}</>;
};

function App() {
  return (
    <>
      <div>Switch case component</div>
      <CustomSwitch value="20">
        <CutsomCase value="10">
          <div>Hello 20</div>
        </CutsomCase>
        <CutsomCase value="20">
          <div>Hello 30</div>
        </CutsomCase>
        <CutsomCase value="40">
          <div>Hello 40</div>
        </CutsomCase>
        <DefaultCase value="50">
          <h2> Default component value</h2>
        </DefaultCase>
      </CustomSwitch>
    </>
  );
}

export default App;
