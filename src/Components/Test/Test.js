import React, { useState } from 'react';

const Test = (props) => {
    // const { count } = props;
    // console.log(count)

    const [count, setCount] = useState(0);

    // const plus = () => {
    //     const newCount = count + 1;
    //     setCount(newCount)
    // }
    // const minus = () => setCount(count - 1)

    // console.log(count)

    return (
        <div>
            <h2>This is test</h2>
            <div className="count mt-5">
                <h2>Count:{count}</h2>
                <button onClick={() => setCount(count + 1)} className='ms-3 p-3'>+</button>
                <button onClick={() => setCount(count - 1)} className='ms-3 p-3'>-</button>

            </div>
        </div>
    );
};

export default Test;