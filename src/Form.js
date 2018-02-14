import React, { Component } from 'react';
import axios from 'axios';


class Form extends React.Component{

    state = {userName:''};

    handlClick_Add_User = (event)=>
    {
        event.preventDefault();
        axios.get('https://api.github.com/users/' + this.state.userName)
        .then(response  =>{
            console.log(response.data.avatar_url);
                this.props.onSubmit(response.data);
        })
        .catch( error => {
            console.log(error);
        });
    }

    handlClick_Add_All_User = (event)=>
    {
        event.preventDefault();
        axios.get('https://api.github.com/users')
        .then(response  =>{
            console.log(response.data.avatar_url);
                this.props.addNewCardFunc(response.data);
        })
        .catch( error => {
            console.log(error);
        });
    }

    handleClearAll = () =>{
        this.props.clearAllCardsFunc();    
      };
    

    render()
    {
        return(
        <div>
            <input type="text" 
            value ={this.state.userName}
            onChange={(event)=> this.setState({ userName: event.target.value})}
            />
            <button onClick={this.handlClick_Add_User}> Add User </button>
            <button onClick={this.handlClick_Add_All_User}> Add  All User </button>
            <button onClick={this.handleClearAll} >Clear</button>
            
        </div>
        );
    }
}

export default Form;