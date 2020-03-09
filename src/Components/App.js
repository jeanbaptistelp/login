import React, { Component } from 'react'
import Visitor from './Visitor';
import Logged from './Logged';


export default class App extends Component {


    state = {
        password : "abcdefgh",
        typePassword : "",
        isLogged : false
    }

    handleChange = (e) => {
        
        console.log(e.target.value)

        this.setState({ typePassword : e.target.value })
    }

    onSubmit = (e) => {

        e.preventDefault()

        console.log('submit')
        console.log(this.state.typePassword)

        if( this.state.typePassword === this.state.password ) {

            this.setState({ isLogged : true })
        }
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                        <input type="text" 
                            placeholder="password" 
                            name="password" 
                            onChange={this.handleChange}
                            value={this.state.typePassword}
                             />
                        <button type="submit">Loggin</button>
                </form>

                {this.state.isLogged ? <Logged /> : <Visitor />}

            </div>
        )
    }
}