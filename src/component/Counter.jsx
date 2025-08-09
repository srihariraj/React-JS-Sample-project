import { useState } from 'react';
import '../css/Counter.css';


const Counter = () => {
    const [count, setCount] = useState(0);
    function handleIncrement() {
        setCount(count + 1);
    }

    return (
        <div className="Counter">
            <h1>Counter Component</h1>
            <marquee><p>This is a simple counter component.</p></marquee>
            <button onClick={() => handleIncrement()}>Increment</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(0)}>Reset</button>
            <br />
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Counter;