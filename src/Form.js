import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import CardList from './CardList';

class Form extends React.Component{
  state= { userName : '' }
  handleSubmit =  (event) =>{
      event.preventDefault();
//    console.log('Event: Form Submit', this.state.userName);
      axios.get('https://api.github.com/users/'+ this.state.userName)
  .then( response =>{
        this.props.onSubmit(response.data);
        this.setState({userName: ''});
    } 
  )
  .catch(function (error) {
    console.log(error);
  });
  }

  handleSubmitAddAll = (event) =>{
    console.log('handleSubmitAddAll');

    axios.get('https://api.github.com/users')
  .then( response =>{
    console.log(response.data);
        this.props.onAddAll(response.data);
    } 
  )
  .catch(function (error) {
    console.log(error);
  });
  }

  render()
  {
      return(
        <form>
          <input type="text" 
          value ={this.state.userName}
          onChange ={(event)=> this.setState({userName : event.target.value})}
          placeholder="GitHub username"           
          />
          <button type="submit" onClick={this.handleSubmit} >Add Card</button>
          {/* <button type="submit" onClick={this.handleSubmitAddAll} >Add All</button> */}
        </form>
      );
  }
}

export  default Form;