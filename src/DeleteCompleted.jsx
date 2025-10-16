import { useDispatch } from "react-redux";

const DeleteCompleted = () => {
  const dispatch = useDispatch();

  const deleteCompleted = () => {
    dispatch({ type: "deleteCompleted" });
  };

  return (
    <div>
      <button onClick={deleteCompleted}>Очистить выполненные</button>
    </div>
  );
};

export default DeleteCompleted;
