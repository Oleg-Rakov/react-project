import React, {useState} from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
    const [counter,setCounter] = useState(0);
    const onClickFn = function () {
        console.log('click');
        setCounter(prev => prev + 1);
    }

    return (
        <div className={classes.Counter}>
            <h1>Counter - {counter}</h1>
            <button onClick={onClickFn}>Click</button>
        </div>
    );
};

export default Counter;