import { useDispatch } from "react-redux";
import { changeName, changeEmail } from "../actions/Actions";
const Input = () => {
  const dispatch = useDispatch();
  return (
    <div className="input-wrapper">
      <input
        type="text"
        id="name"
        placeholder="Enter name here"
        onChange={(e) => {
          dispatch(changeName(e.target.value));
        }}
      />
      <input
        type="text"
        id="email"
        placeholder="Enter email here"
        onChange={(e) => {
          dispatch(changeEmail(e.target.value));
        }}
      />
    </div>
  );
};

export default Input;
