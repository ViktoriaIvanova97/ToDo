import { useSelector, useDispatch } from "react-redux";

const Input = () => {
  const { text } = useSelector((store) => store.text);
  const { tasks } = useSelector((store) => store.tasks);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch({ type: "change", payload: e.target.value });
  };

  const addNewTask = () => {
    dispatch({ type: "add", payload: text });
    dispatch({ type: "zero" });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addNewTask();
  };
  console.log(tasks);
  return (
    <div className="style">
      <input
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        type="text"
        placeholder="Введите текст задачи..."
      />
      <button onClick={addNewTask}>Добавить</button>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
    </div>
  );
};

export default Input;
