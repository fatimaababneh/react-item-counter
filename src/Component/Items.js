import React, { Component } from 'react'
import Item from './Item';

export class Items extends Component {
    
    constructor(props){
        super(props)
        this.heels=[
            {
                name:'high',
                price:'34$',
                imag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWRde2Ejes09166cPlIHJdtssc2cLPuESr3w&usqp=CAU'
    
            },
            {
                name:'low',
                price:'34$',
                imag:'https://imgix.bustle.com/uploads/getty/2020/4/8/14b8696d-a4bb-4a29-82c1-e1deb3d410e2-getty-1176712608.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress'
            },
            {
                name:'var',
                price:'34$',
                imag:'https://www.lulus.com/images/product/xlarge/6070141_1344896.jpg?w=375&hdpi=1'
            },
            {
                name:'led',
                price:'34$',
                imag:'https://cdn.shopify.com/s/files/1/1816/6561/products/6_4e73f585-b779-4390-b5a8-d21e89c5181c_grande.jpg'
            }
        ];
       this.state={
           data:0
       }
    }
   
    render(){
       
        return (
            <div >
                <h1>Total mount{this.props.total}</h1>
                { this.heels.map((item) =>
                (<Item {...item} onChangesum ={this.add} onChangesub={this.sub} sum={this.props.sum} sub={this.props.sub}/>)
                )
                }
            </div>
        )
    }
}

export default Items

