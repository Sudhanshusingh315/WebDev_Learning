import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/new" element={<h1>New</h1>} />
            <Route path="/:id">
                <Route index element={<h1>show</h1>} />
                <Route path="edit" element={<h1>edit</h1>} />
            </Route>
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    );
}

export default App;
