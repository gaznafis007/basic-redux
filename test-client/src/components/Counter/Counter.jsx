import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByValue, increment, incrementByValue } from "../../redux/features/counterSlice";



const Counter = () => {
    // const {count, handleIncrement, handleDecrement} = useContext(CounterContext)
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()
    return (
        <div className="flex flex-row gap-3 bg-slate-100 justify-between rounded-md my-2 p-4 items-center">
            <button onClick={() =>dispatch(decrementByValue(5))} className="text-white capitalize bg-violet-600 p-2 rounded-md">Decrement by 5</button>
            <button onClick={() =>dispatch(decrement())} className="text-white capitalize bg-yellow-400 p-2 rounded-md">Decrement</button>
            <h2 className="font-semibold text-center">Counter: {count}</h2>
            <button onClick={() => dispatch(increment())} className="text-white capitalize bg-rose-600 p-2 rounded-md">Increment</button>
            <button onClick={() => dispatch(incrementByValue(5))} className="text-white capitalize bg-amber-600 p-2 rounded-md">Increment by 5</button>
        </div>
    );
};

export default Counter;