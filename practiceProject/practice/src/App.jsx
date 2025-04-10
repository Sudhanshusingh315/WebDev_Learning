import { useEffect, useRef, useState } from "react";
import "./App.css";
import { useFormState } from "react-dom";
import Step from "./Step";

export default function App() {
    const list = [<Example1 />, <Example2 />, <Example3 />, <Example4 />];
    return <Step list={list} />;
}

const Example1 = () => {
    return <h1>Step 1</h1>;
};

const Example2 = () => {
    return <h1>Step 2</h1>;
};

const Example3 = () => {
    return <h1>Step 3</h1>;
};

const Example4 = () => {
    return <h1>Step 4</h1>;
};
