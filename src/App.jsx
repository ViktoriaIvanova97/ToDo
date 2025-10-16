import "./App.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SortTask from "./SortTask";
import Input from "./Input";
import TasksList from "./TasksList";
import TasksFilter from "./TasksFilter";
import DeleteCompleted from "./DeleteCompleted";
import CountActive from "./CountActive";

function App() {
  const { tasks, filter, sortOrder } = useSelector((store) => store.tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);

  useEffect(() => {
    localStorage.setItem("sortOrder", sortOrder);
  }, [sortOrder]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h2>To-Do List</h2>
      <div className="component">
        <Input />
      </div>
      <div className="component">
        <TasksList />
      </div>
      <div className="component">
        <TasksFilter />
      </div>
      <div
        className="component"
        style={{
          display: "flex",
          width: "370px",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#333",
          fontWeight: "500",
        }}
      >
        <DeleteCompleted />
        <CountActive />
      </div>
    </div>
  );
}

export default App;
