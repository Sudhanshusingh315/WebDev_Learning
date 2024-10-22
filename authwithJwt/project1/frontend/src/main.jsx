import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider>
      <BrowserRouter >
      <Provider store={store}>
        <ToastContainer />
        <App />
      </Provider>
      </BrowserRouter>
    </ChakraProvider>
);
