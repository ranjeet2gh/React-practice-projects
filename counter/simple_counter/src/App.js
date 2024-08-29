import React, { Component } from 'react'
import './App.css'

 class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  increament=()=>{
    this.setState({count:this.state.count+1});
  }
  decreament=()=>{
    this.setState({count:this.state.count-1});
  }
  render() {
    return (
      <div className='header'>
      <div className='app'>
        <button onClick={this.increament} className='counter'>+</button>
        <button onClick={this.decreament} className='counter'>-</button>
        <h2>{this.state.count}</h2>
      
        </div>
      </div>
    )
  }
}
export default App
