import { useSelector, useDispatch } from "react-redux";

const SortTask = () => {
  const { sortOrder } = useSelector((store) => store);
  const dispatch = useDispatch();

  const sortUp = () => {
    dispatch({ type: "setSortOrder", payload: "desc" });
  };

  const sortDown = () => {
    dispatch({ type: "setSortOrder", payload: "asc" });
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
