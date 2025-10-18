import { useDispatch } from "react-redux";
import { deleteCompletedTasksAction } from "./redux/actions/tasksActions";

const DeleteCompleted = () => {
  const dispatch = useDispatch();

  const deleteCompleted = () => {
    dispatch(deleteCompletedTasksAction());
  };

  return (
    <div>
      <button onClick={deleteCompleted}>Очистить выполненные</button>
    </div>
  );
};

export default DeleteCompleted;
