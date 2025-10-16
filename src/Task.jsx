import { useState } from "react";
import { useDispatch } from "react-redux";

const Task = ({ task }) => {
  const [edit, setEdit] = useState(false);
  const [editTask, setEditTask] = useState(task.title);

  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch({ type: "delete", payload: task.id });
  };

  const handleDownEnter = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "edit", payload: { id: task.id, title: editTask } });
      setEdit(false);
    }
  };

  const toggleDone = () => {
    dispatch({ type: "toggleDone", payload: task.id });
  };

  return (
    <div className="style" style={{ paddingTop: "20px" }}>
    <label className="checkbox-wrapper">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={toggleDone}
      />
      {!edit ? (
        <p className={task.isDone ? "active" : ""}>{task.title}</p>
      ) : (
        <input
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          onKeyDown={handleDownEnter}
        />
      )}
    </label>
    <button onClick={() => setEdit((edit) => !edit)}>Изменить</button>
    <button onClick={deleteTask}>&times;</button>
  </div>
  
  );
};

export default Task;
