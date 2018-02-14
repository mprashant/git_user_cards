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

    render()
    {
        return(
        <div>
            <input type="text" 
            value ={this.state.userName}
            onChange={(event)=> this.setState({ userName: event.target.value})}
            />
            <button onClick={this.handlClick_Add_User}> Add User </button>
        </div>
        );
    }
}

export default Form;