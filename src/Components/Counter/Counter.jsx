import { useSelector, useDispatch } from "react-redux";
import { decrementActionCreator, incrementActionCreator } from "../../actionCreators/counterActionCreators.jsx";
import './Counter.scss';

export const Counter = () => {
  const value = useSelector(state => state.counterState.value);
  const dispatch = useDispatch();

  return (
    <div className='Counter'>
      <button onClick={() => dispatch(decrementActionCreator(1))}><span>-</span></button>
      <p>{value}</p>
      <button onClick={() => dispatch(incrementActionCreator(1))}><span>+</span></button>
    </div>
  );
};