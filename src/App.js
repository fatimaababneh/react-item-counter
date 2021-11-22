import React, { Component } from 'react';
import Items from './Component/Items';
import './App.css';

class App extends Component {
  constructor(){
  super();
this.state={
  data:0
  }}
    totaladd1=()=>{
    this.setState({data: this.state.data+1})
    }
    totalsub1=()=>{
    if(this.state.data)
    this.setState({data: this.state.data-1})
    }
    
  render(){
  return (
    <div className="App">
     <Items total={this.state.data} sum={this.totaladd1} sub={this.totalsub1}/>
    </div>
        );
  }
}

export default App;
