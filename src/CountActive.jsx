import { useSelector } from "react-redux";
import { selectCountActive } from "./redux/selectors";

const CountActive = () => {
  const count = useSelector(selectCountActive);

  return (
    <div>
      <p>Осталось дел: {count}</p>
    </div>
  );
};

export default CountActive;
