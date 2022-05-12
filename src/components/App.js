import React, { Component } from 'react';
import 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counters from './Counters.js';

class App extends Component{
      state = {
        counters: [
          {id: 0, value: 10},
          {id: 1, value: 0},
          {id: 2, value: 0},
          {id: 3, value: 0},
        ]
      }

      increment = (ind) =>{
          const counters = [...this.state.counters];
          counters.map( c => {
             if(c.id === ind) c.value++;
          })
          this.setState({ counters: counters});
      }

      reset = (ind) =>{
            const counters = [...this.state.counters];
            counters.map( c => {
              if(c.id === ind) c.value = 0;
           })
            this.setState({counters});
      }

      delete = (ind) =>{
            const counters = this.state.counters.filter( c => c.id != ind ); 
            this.setState({counters});
      }

      render(){
        return (
          <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">No. of unique items: { this.state.counters.filter(c => c.value > 0).length} </nav>
          <Counters counters= { this.state.counters } onIncrement = { this.increment } onReset = { this.reset } onDelete = { this.delete} />
          </React.Fragment>
        );
      }
}

export default App;