import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    function handleIncrement() {
        setCount(count + 1);
    }

    return (
        <div className="Counter">
            <h1>Counter Component</h1>
            <p>This is a simple counter component.</p>
            <button onClick={() => handleIncrement()}>Increment</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Counter;