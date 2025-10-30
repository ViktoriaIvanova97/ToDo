import { useSelector } from "react-redux";
import Task from "./Task";
import SortTask from "./SortTask";
import { selectVisibleTasks} from "./redux/selectors";


const TasksList = () => {
  const tasks = useSelector(selectVisibleTasks)


  return (
    <div>
      <SortTask />
      {tasks.length > 0 ? (
        tasks.map((item) => <Task key={item.id} task={item} />)
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
