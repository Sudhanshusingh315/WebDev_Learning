import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/Toggletheme";
import TaskProvider from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <div className="app-container">
          <h1>Advance Task manager</h1>
          <ThemeToggle />
        </div>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
