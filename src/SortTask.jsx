import { useSelector, useDispatch } from "react-redux";
import { selectSortOrder } from "./redux/selectors";
import { setSortOrderAction } from "./redux/actions/tasksActions";

const SortTask = () => {
  const sortOrder = useSelector(selectSortOrder);
  const dispatch = useDispatch();

  const sortUp = () => {
    dispatch(setSortOrderAction("desc"));
  };

  const sortDown = () => {
    dispatch(setSortOrderAction("asc"));
  };
  return (
    <div className="style">
      <button onClick={sortUp} disabled={sortOrder === "desc"}>
        Новые сверху
      </button>
      <button
        onClick={sortDown}
        disabled={sortOrder === "asc"}
        style={{ marginLeft: "5px" }}
      >
        Новые снизу
      </button>
    </div>
  );
};

export default SortTask;
