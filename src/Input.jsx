import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTaskAction } from "./redux/actions/tasksActions";

const Input = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addNewTask = () => {
    const trimmedText = value.trim();
    if (trimmedText !== "") {
      dispatch(addTaskAction(trimmedText));
      setValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addNewTask();
  };
  return (
    <div className="style">
      <input
        className="inputTask"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        type="text"
        placeholder="Введите текст задачи..."
      />
      <button onClick={addNewTask}>Добавить</button>
    </div>
  );
};

export default Input;
