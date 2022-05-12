import React from 'react';
import ReactDom from 'react-dom';
import Counter from './Counter.js'
// import 'bootstrap/dist/css/bootstrap.min.css';

function Counters(props){
         return (
             <div className="countersDiv">
                  { props.counters.map( c => {
                     return <Counter value={ c.value} key={c.id} onIncre={props.onIncrement} ind={c.id} onReset = {props.onReset} onDelete = {props.onDelete} />
                  })}
             </div>
         );
}

export default Counters;