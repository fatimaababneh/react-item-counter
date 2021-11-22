import React, { Component } from 'react'

export class Item extends Component {
    constructor(props){
    super(props);
    this.state={
        counter:0}
    }
    add1=()=>{  
        this.setState({counter: this.state.counter+1})
        this.props.sum();
    }
    sub1=()=>{
        if(this.state.counter)
        {
        this.setState({counter: this.state.counter-1 })
        this.props.sub();
        }
    }
    render(){
        return (
            <div >
                <div className="card-container">
               <img src={this.props.imag}/><h1>{this.props.name}</h1><h5>{this.props.price}</h5><button onClick={this.sub1}>-</button>{this.state.counter}<button onClick={this.add1}>+</button>
            </div>
            </div>
        )
    }
}

export default Item

