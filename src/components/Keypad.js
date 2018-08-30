import React, {Component} from 'react'

export default class Keypad extends Component{
  constructor(props){
    super(props)
  }

  entering = ()=>{
    console.log('Entering password...')
  }

  render(){

    return(
      <input type="password" onKeyUp={()=>this.entering()}></input>
    )
  }
}
