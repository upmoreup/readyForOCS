import { useEffect } from "react";
import useStore from "stores/store";

const Child2 = () => {
    const { count, increase, decrease, reset } = useStore();

    return (
        <>
            2page
            <div>{count}</div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>reset</button>
        </>
    )
};

export default Child2;