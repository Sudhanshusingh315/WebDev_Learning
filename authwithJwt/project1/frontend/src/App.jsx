import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Porfile";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Routes } from "react-router-dom";
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  //   {
  //     path:"/profile",
  //     element: <Profile />
  //   },

  // ]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Private route */}
        <Route path="" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
