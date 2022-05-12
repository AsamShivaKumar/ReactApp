import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Counter(props){
    return (
        <div>
            <span> { props.value } </span>
            <button className="btn btn-danger m-2" onClick={ () =>{props.onIncre(props.ind)}}>Increment</button>
            <button className="btn btn-warning" onClick={ ()=> {props.onReset(props.ind)} }>Reset</button>
            <button className="btn btn-dark m-2" onClick={ ()=>{props.onDelete(props.ind)}}>Delete</button>
        </div>
    );
}

export default Counter;
