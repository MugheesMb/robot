import React, { Component } from 'react';

import Seabox from '../components/Seabox';
import Cardp from '../components/Cardp';
import './App.css';
import Scroll from '../components/Scroll';



class App extends Component {
    constructor(){
        super();
        this.state = {
            arr: [],
            searchfield: '' 
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ arr: users})});
      }
onSearchChange = (event) => {
    this.setState( { searchfield: event.target.value})
}

    render() {
        const filteredarr = this.state.arr.filter(arr =>{ 
            return arr.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
     
        })
        if(this.state.arr.length===0){
         return <h1 className=' tc ' >Loading</h1>
        }
        else{
            return(
                <div className='tc'> 
                    <h1>Robofriends of MB</h1>
                     <Seabox searchChange={this.onSearchChange}/>
                
                    <Scroll>
                     < Cardp arr={filteredarr}/>      
                </Scroll>
                </div>
                );
        }


    
}
}
export default App;