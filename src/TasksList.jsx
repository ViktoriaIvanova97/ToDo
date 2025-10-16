import { useSelector} from "react-redux";
import Task from "./Task";
import SortTask from "./SortTask";

const TasksList = () => {
  const { tasks, filter } = useSelector((store) => store.tasks);

  const filteredTasks = tasks.filter((item) => {
    if (filter === "activeTask") return !item.isDone;
    if (filter === "completedTask") return item.isDone;
    return true;
  });

  return (
    <div>
      <SortTask />
      {filteredTasks.length > 0 ? (
        filteredTasks.map((item) => <Task key={item.id} task={item} />)
      ) : (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#333",
            fontWeight: " 500",
          }}
        >
          Пусто
        </p>
      )}
    </div>
  );
};

export default TasksList;
