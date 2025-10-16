import { useDispatch, useSelector } from "react-redux";

const TasksFilter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((store) => store.tasks.filter);

  const setFilter = (type) => {
    dispatch({ type: "setFilter", payload: type });
  };

  return (
    <div  className="style">
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>
        Все
      </button>
      <button
        onClick={() => setFilter("completedTask")}
        disabled={filter === "completedTask"}
      >
        Выполненные
      </button>
      <button
        onClick={() => setFilter("activeTask")}
        disabled={filter === "activeTask"}
      >
        Активные
      </button>
    </div>
  );
};

export default TasksFilter;
