import { useSelector, useDispatch } from "react-redux";

const Input = () => {
  const { text } = useSelector((store) => store.text);
  const { tasks } = useSelector((store) => store.tasks);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch({ type: "change", payload: e.target.value });
  };

  const addNewTask = () => {
    const trimmedText = text.trim();
    if (trimmedText !== "") {
      dispatch({ type: "add", payload: text });
      dispatch({ type: "zero" });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addNewTask();
  };
  console.log(tasks);
  return (
    <div className="style">
      <input className="inputTask"
        value={text}
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
