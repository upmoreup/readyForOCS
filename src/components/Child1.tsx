import useStore from "stores/store";
import components from "components";

const Child1 = () => {
    const { count, increase, decrease, reset } = useStore();

    return (
        <>
            1page
            <div>{count}</div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>reset</button>
            <br /><br /><br />
            <components.Child2 />
        </>
    )
};

export default Child1;